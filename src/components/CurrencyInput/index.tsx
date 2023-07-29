import { useState } from 'react'

import CurrencyInputField, {
  CurrencyInputProps as ReactCurrencyInputProps,
} from 'react-currency-input-field'
import { twMerge } from 'tailwind-merge'

import { ChevronDownIcon } from '@/assets/icons'

type CurrencyInputProps = {
  onValueChange(value: number): void
} & ReactCurrencyInputProps

export function CurrencyInput({
  onValueChange,
  className = '',
  ...props
}: CurrencyInputProps) {
  const [value, setValue] = useState<string | undefined>()

  const handleChange = (value: string | undefined) => {
    if (!value) return
    const floatValue = parseFloat(value.replace(',', '.'))
    onValueChange(floatValue)
    setValue(value)
  }

  const handleValueIncrement = () => {
    let floatValue = parseFloat((value as string).replace(',', '.'))
    floatValue += 1
    onValueChange(floatValue)
    setValue(String(floatValue))
  }

  const handleValueDecrement = () => {
    let floatValue = parseFloat((value as string).replace(',', '.'))
    floatValue -= 1
    onValueChange(floatValue)
    setValue(String(floatValue))
  }

  return (
    <div className="relative">
      <CurrencyInputField
        inputMode="numeric"
        decimalsLimit={2}
        allowDecimals
        groupSeparator="."
        decimalSeparator=","
        decimalScale={2}
        onValueChange={handleChange}
        value={value}
        className={twMerge(
          'h-full w-full rounded-lg border border-secondary-300 bg-white p-3.5 pr-10 text-left outline-none sm:text-sm',
          className,
        )}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 ml-3 mt-0 flex h-full flex-col items-center justify-evenly pr-3">
        <button
          className="h-3 w-3 rotate-180 text-secondary-300"
          onClick={handleValueIncrement}
        >
          <ChevronDownIcon />
        </button>

        <button className="h-3 w-3 text-secondary-300" onClick={handleValueDecrement}>
          <ChevronDownIcon />
        </button>
      </div>
    </div>
  )
}
