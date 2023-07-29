import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import Select, {
  components,
  DropdownIndicatorProps,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select'

import { ChevronDownIcon } from '@/assets/icons'

interface SelectInputProps extends SelectProps<OptionTypeBase> {}

const ReactSelectInput: ForwardRefRenderFunction<HTMLSelectElement, SelectInputProps> = (
  { options, ...props },
  ref,
) => {
  const DropdownIndicator = (dropdownProps: DropdownIndicatorProps) => {
    const { isFocused } = dropdownProps

    return (
      <components.DropdownIndicator {...dropdownProps}>
        <span
          className={`pointer-events-none absolute inset-y-3 right-0 flex h-6 w-6 items-center pr-2 ${
            isFocused ? 'text-primary-500' : 'text-secondary-300'
          }`}
        >
          <ChevronDownIcon />
        </span>
      </components.DropdownIndicator>
    )
  }

  return (
    <Select
      ref={ref}
      options={options}
      {...props}
      unstyled
      components={{
        DropdownIndicator,
        ...props.components,
      }}
      styles={{
        input: (base) => ({
          ...base,
          'input:focus': {
            boxShadow: 'none',
          },
        }),
      }}
      classNames={{
        control: ({ hasValue }) =>
          `border-secondary-300 border rounded-lg ${
            hasValue ? 'py-0' : 'py-[0.7rem]'
          } bg-white hover:cursor-pointer`,
        placeholder: () => 'text-secondary-500 pl-2',
        input: () => 'pl-1',
        singleValue: () => 'leading-7',
        valueContainer: () => '!flex w-full pl-1',
        menu: () => 'p-2 mt-2 border border-secondary-300 bg-white rounded-lg',
        option: () => 'p-2 border-b-secondary-300',
      }}
    />
  )
}

export const SelectInput = forwardRef(ReactSelectInput)
