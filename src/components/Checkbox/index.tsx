import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from 'react'

interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef((props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      <input
        type="checkbox"
        className="peer mt-1 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border-2 border-primary-500 bg-white checked:border-0 checked:bg-primary-500"
        ref={ref}
        {...props}
      />
      <svg
        className="absolute ml-[2px] mt-[6px] hidden h-4 w-4 text-primary-900 peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </>
  )
})
