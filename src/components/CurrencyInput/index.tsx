import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'

import { twMerge } from 'tailwind-merge'

import { ChevronDownIcon } from '@/assets/icons'

type InputProps = {
  setValue?: any
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, any>

// eslint-disable-next-line react/display-name
export const CurrencyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', setValue, ...props }, ref) => {
    const [innerValue, setInnerValue] = useState(1)

    const handleValueIncrement = () => {
      const max = props.max as number

      setInnerValue((value) => {
        if (max && value >= max) {
          return max
        }

        return (value += 1)
      })
    }

    const handleValueDecrement = () => {
      setInnerValue((value) => {
        if (value === 1) return 1

        return (value -= 1)
      })
    }

    useEffect(() => {
      if (setValue) setValue(props.name, innerValue)
    }, [innerValue])

    return (
      <div className="relative">
        <input
          ref={ref}
          type="number"
          value={innerValue}
          className={twMerge(
            'h-full w-full rounded-lg border border-secondary-300 bg-white p-3.5 pr-10 text-left outline-none sm:text-sm',
            className,
          )}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 ml-3 mt-0 flex h-full flex-col items-center justify-evenly pr-3">
          <button
            type="button"
            className="h-3 w-3 rotate-180 text-secondary-300"
            onClick={handleValueIncrement}
          >
            <ChevronDownIcon />
          </button>

          <button
            className="h-3 w-3 text-secondary-300"
            onClick={handleValueDecrement}
            type="button"
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    )
  },
)
