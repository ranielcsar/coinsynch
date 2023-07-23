import { ElementType, HTMLAttributes, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function TextInput({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        'relative flex w-full items-center overflow-hidden rounded-lg border border-secondary-300 bg-white pl-6 text-left focus-visible:border-primary-500 sm:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="h-full w-full cursor-text px-3 py-4 text-base outline-none group-focus-visible:border-primary-500"
      {...props}
    />
  )
}

type IconProps = {
  icon: ElementType
} & Partial<SVGAElement>

function TextInputLeftIcon({ icon: Icon, ...props }: IconProps) {
  return <Icon {...props} className="h-10 w-10 group-focus-visible:text-primary-500" />
}

TextInput.LeftIcon = TextInputLeftIcon
TextInput.Input = Input
