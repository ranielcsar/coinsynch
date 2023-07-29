import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

import { Button, CurrencyInput, Modal, SelectInput } from '@/components'
import { useCryptoCurrencies } from '@/hooks/api/useCryptoCurrencies'

type AddCryptoProps = {
  isOpen: boolean
  onClose: () => void
}

const addCryptoSchema = z.object({
  transfer: z.string().email({ message: 'Email is required' }),
  quantity: z.string().nonempty({ message: 'Password is required' }),
})

type AddCryptoForm = z.infer<typeof addCryptoSchema>

export function AddCrypto({ isOpen, onClose }: AddCryptoProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddCryptoForm>({
    resolver: zodResolver(addCryptoSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0

  const handleAddCrypto = (data: AddCryptoForm) => console.log({ data })

  const handleClose = () => {
    onClose()
    reset()
  }

  const { cryptoCurrencies } = useCryptoCurrencies(10)

  const cryptoOptions = cryptoCurrencies?.map((crypto) => ({
    value: crypto.id,
    label: crypto.name,
    image: `https://cryptoicons.org/api/icon/${crypto.symbol.toLocaleLowerCase()}/100`,
  }))

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="text-center text-2xl">Add Crypto</Modal.Title>

      <form onSubmit={handleSubmit(handleAddCrypto)}>
        <Modal.Body className="my-6 mb-12 grid auto-rows-[3rem] gap-5 md:mb-12">
          <SelectInput
            options={cryptoOptions}
            {...register('transfer', { required: true })}
            placeholder="Choose"
            components={{
              SingleValue: SelectOption,
              Option: SelectOption,
            }}
          />

          <CurrencyInput
            onValueChange={console.log}
            {...register('quantity', { required: true })}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button disabled={hasErrors} className="w-full py-6 text-lg">
            Transfer Crypto
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
