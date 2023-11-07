import React, { forwardRef } from 'react'

import Select, {
  components,
  DropdownIndicatorProps,
  Props as SelectProps,
} from 'react-select'
import { twMerge } from 'tailwind-merge'

import { ChevronDownIcon } from '@/assets/icons'

// eslint-disable-next-line react/display-name
export const SelectInput = forwardRef<any, SelectProps>(({ options, ...props }, ref) => {
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
        ...props.classNames,
        placeholder: () => 'text-secondary-500 pl-2',
        input: () => 'pl-1',
        singleValue: () => 'leading-7',
        valueContainer: () => '!flex w-full pl-1',
        menu: () => 'p-2 mt-2 border border-secondary-300 bg-white rounded-lg',
        option: ({ isFocused, isSelected }) =>
          twMerge(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            'p-2 border-b-secondary-300 hover:cursor-pointer rounded',
          ),
        menuList: () => 'border-b-secondary-300',
      }}
    />
  )
})

const optionStyles = {
  focus: 'bg-secondary-100 active:bg-secondary-200',
  selected: 'text-primary-600 font-bold bg-primary-100',
}

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
