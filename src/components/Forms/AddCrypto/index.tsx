import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

import { Button, CurrencyInput, InputError, Modal, SelectInput } from '@/components'
import { useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'
import { useToast } from '@/hooks/useToast'
import { useAuth } from '@/pages/authContext'
import { userApi } from '@/services/api'
import { saveLoggedUser } from '@/services/user'

type AddCryptoProps = {
  isOpen: boolean
  onClose: () => void
}

const addCryptoSchema = z.object({
  crypto: z
    .object({
      value: z.string(),
      label: z.string(),
      image: z.string(),
    })
    .required(),
  quantity: z.number().min(1, { message: 'Quantity is required' }),
})

type AddCryptoForm = z.infer<typeof addCryptoSchema>

export function AddCrypto({ isOpen, onClose }: AddCryptoProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setValue,
  } = useForm<AddCryptoForm>({
    resolver: zodResolver(addCryptoSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0
  const { user, setUser } = useAuth()
  const { toast } = useToast()

  const handleAddCrypto = async (data: AddCryptoForm) => {
    try {
      if (user) {
        let newWallet = [...user.wallet]

        const existingCrypto = newWallet.find((crypto) => crypto.id === data.crypto.value)

        if (!existingCrypto) {
          newWallet.push({
            id: data.crypto.value,
            holdings: data.quantity,
          })
        }

        newWallet = newWallet.map((crypto) => {
          if (crypto.id === existingCrypto?.id) {
            return {
              ...crypto,
              holdings: data.quantity + existingCrypto.holdings,
            }
          }

          return crypto
        })

        const newUser = {
          ...user,
          wallet: newWallet,
        }

        await userApi.patch(`/users/${user.id}`, { wallet: newWallet })

        setUser(newUser)
        saveLoggedUser(newUser)
        handleClose()
        toast('Crypto added successfully', { type: 'success' })
      }
    } catch (error: any) {
      toast(error.message, { type: 'error' })
    }
  }

  const handleClose = () => {
    reset()
    onClose()
    setValue('quantity', 0)
  }

  const { cryptoCurrencies } = useCryptoCurrencies(20)
  const cryptoOptions = cryptoCurrencies?.map((crypto) => ({
    value: crypto.id,
    label: crypto.name,
    image: `https://cryptoicons.org/api/icon/${crypto.symbol.toLocaleLowerCase()}/100`,
  }))

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="text-center text-2xl">Add Crypto</Modal.Title>

      <form onSubmit={handleSubmit(handleAddCrypto)}>
        <Modal.Body className="my-6 mb-12 grid auto-rows-[max-content] gap-5 md:mb-12">
          <Controller
            control={control}
            name="crypto"
            render={({ field }) => (
              <>
                <SelectInput
                  options={cryptoOptions}
                  placeholder="Choose"
                  components={{
                    SingleValue: SelectOption,
                    Option: SelectOption,
                  }}
                  {...field}
                />
                <InputError message={errors.crypto?.message} />
              </>
            )}
          />

          <CurrencyInput
            {...register('quantity', { required: true })}
            setValue={setValue}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" disabled={hasErrors} className="w-full py-6 text-lg">
            Add Crypto
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

function SelectOption(props: any) {
  const { data: option, innerRef, innerProps, isFocused, isSelected } = props

  const optionStyles = {
    base: 'flex items-center gap-2 py-3 pl-1 hover:cursor-pointer rounded',
    focus: 'bg-secondary-100 active:bg-secondary-200',
    selected: 'text-primary-600 font-bold bg-primary-100',
  }

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={twMerge(
        isFocused && optionStyles.focus,
        isSelected && optionStyles.selected,
        optionStyles.base,
      )}
    >
      <Image src={option.image} alt={`${option.label} icon`} width={20} height={20} />
      {option.label}
    </div>
  )
}
