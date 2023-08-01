import {
  DetailedHTMLProps,
  ElementType,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  Ref,
} from 'react'

import { twMerge } from 'tailwind-merge'

import { InputError } from '..'

export function TextInput({
  className = '',
  children,
  error,
  ...props
}: HTMLAttributes<HTMLElement> & { error?: string }) {
  return (
    <div className="relative grid grid-rows-[1fr,max-content] gap-2">
      <div
        className={twMerge(
          'peer relative flex h-max w-full flex-1 items-center overflow-hidden rounded-lg border border-secondary-300 bg-white pl-6 text-left',
          className,
        )}
        {...props}
      >
        {children}
      </div>
      <InputError message={error} />
    </div>
  )
}

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, any>

// eslint-disable-next-line react/display-name
const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className="h-full w-full flex-1 cursor-text px-3 py-4 text-base outline-none"
      ref={ref}
      {...props}
    />
  )
})

type IconProps = {
  icon: ElementType
} & Partial<SVGAElement>

function TextInputLeftIcon({ icon: Icon, ...props }: IconProps) {
  return (
    <span className="h-5 w-5">
      <Icon {...props} className="peer-focus-visible:text-primary-500" />
    </span>
  )
}

TextInput.LeftIcon = TextInputLeftIcon
TextInput.Input = Input
