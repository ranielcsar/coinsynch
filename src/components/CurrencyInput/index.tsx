import CurrencyInputField, {
  CurrencyInputProps as ReactCurrencyInputProps,
} from 'react-currency-input-field'
import { twMerge } from 'tailwind-merge'

import styles from './index.module.css'

type CurrencyInputProps = {
  onValueChange(value: number): void
} & ReactCurrencyInputProps

export function CurrencyInput({
  onValueChange,
  className = '',
  ...props
}: CurrencyInputProps) {
  const handleChange = (value: string | undefined) => {
    if (!value) return
    const floatValue = parseFloat(value.replace(',', '.'))
    onValueChange(floatValue)
  }

  return (
    <input
      type="number"
      className={twMerge(
        `${styles.number_input} w-full rounded-lg border border-secondary-300 bg-white px-3 py-4 pl-6 text-left sm:text-sm`,
        className,
      )}
    />
  )

  // return (
  //   <CurrencyInputField
  //     inputMode="numeric"
  //     decimalsLimit={2}
  //     allowDecimals
  //     groupSeparator="."
  //     decimalSeparator=","
  //     decimalScale={2}
  //     onValueChange={handleChange}
  //     className={twMerge(
  //       'w-full rounded-lg border border-secondary-300 bg-white px-3 py-4 pl-6 text-left sm:text-sm',
  //       className,
  //     )}
  //     {...props}
  //   />
  // )
}
