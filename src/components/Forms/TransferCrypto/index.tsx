import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, CurrencyInput, Divider, Modal, SelectInput } from '@/components'
import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'
import { useToast } from '@/hooks/useToast'
import { useAuth } from '@/modules/authContext'
import { coinIcon } from '@/services/api'
import { saveLoggedUser } from '@/services/user'

type TransferCryptoProps = {
  crypto: CryptoCurrency | null
  isOpen: boolean
  onClose: () => void
}

const transferOptions = [
  {
    value: 'in',
    label: 'Transfer in',
  },
  {
    value: 'out',
    label: 'Transfer out',
  },
]

const transferCryptoSchema = z.object({
  transfer: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .required(),
  quantity: z.number().min(1, { message: 'Quantity is required' }),
})

type TransferCryptoForm = z.infer<typeof transferCryptoSchema>

export function TransferCrypto({ crypto, isOpen, onClose }: TransferCryptoProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
  } = useForm<TransferCryptoForm>({
    resolver: zodResolver(transferCryptoSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0
  const { user, setUser } = useAuth()
  const { toast } = useToast()
  const watchTransferType = watch('transfer')
  const [currencyMax, setCurrencyMax] = useState(crypto?.holdings)

  useEffect(() => {
    if (watchTransferType?.value === 'out') {
      setCurrencyMax(crypto?.holdings)
    } else {
      setCurrencyMax(undefined)
    }
  }, [watchTransferType])

  const handleTransferCrypto = async (data: TransferCryptoForm) => {
    try {
      if (user && crypto) {
        let walletCopy = [...user.wallet]

        const newWallet = walletCopy
          .map((walletCrypto) => {
            if (walletCrypto.id === crypto?.id) {
              let holdings = crypto.holdings || 0

              if (data.transfer.value === 'out') {
                holdings -= data.quantity
              } else {
                holdings += data.quantity
              }

              if (holdings <= 0) return null

              return {
                ...walletCrypto,
                holdings,
              }
            }

            if (walletCrypto.holdings === 0) return null

            return walletCrypto
          })
          .filter((crypto) => crypto)

        const newUser = {
          ...user,
          wallet: newWallet as typeof walletCopy,
        }

        setUser(newUser)
        saveLoggedUser(newUser)
        handleClose()
        toast('Crypto transfered successfully', { type: 'success' })
      }
    } catch (error: any) {
      toast(error.message, { type: 'error' })
    }
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="mb-6 text-center text-2xl">Transfer Crypto</Modal.Title>
      <Divider className="m-0" />

      <section className="mt-4 flex items-center justify-between px-2">
        <span className="text-secondary-400">You are transfering</span>

        <div className="flex items-center gap-2">
          <Image
            src={coinIcon(crypto?.symbol.toLowerCase())}
            width={30}
            height={30}
            alt={`${crypto?.name} icon`}
          />
          <span>{crypto?.name}</span>
          <span className="text-secondary-500">{crypto?.symbol}</span>
        </div>
      </section>

      <form onSubmit={handleSubmit(handleTransferCrypto)}>
        <Modal.Body className="my-6 mb-12 grid auto-rows-[max-content] gap-5 md:mb-14">
          <div>
            <label
              htmlFor="transfer"
              className="text-md block leading-6 text-default_text"
            >
              Transfer
            </label>

            <Controller
              control={control}
              name="transfer"
              render={({ field }) => (
                <SelectInput
                  options={transferOptions}
                  placeholder="Choose"
                  {...field}
                  classNames={{
                    control: () =>
                      'border-secondary-300 border rounded-lg py-[0.7rem] pl-2 bg-white',
                  }}
                />
              )}
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="text-md block leading-6 text-default_text"
            >
              Quantity
            </label>

            <CurrencyInput
              {...register('quantity', { required: true })}
              max={currencyMax}
              setValue={setValue}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button disabled={hasErrors} type="submit" className="w-full py-6 text-lg">
            Transfer Crypto
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
