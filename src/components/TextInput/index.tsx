import {
  DetailedHTMLProps,
  ElementType,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  Ref,
} from 'react'

import { twMerge } from 'tailwind-merge'

export function TextInput({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        'peer relative flex w-full items-center overflow-hidden rounded-lg border border-secondary-300 bg-white pl-6 text-left',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, any>,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        type="text"
        className="h-full w-full flex-1 cursor-text px-3 py-4 text-base outline-none"
        ref={ref}
        {...props}
      />
    )
  },
)

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
