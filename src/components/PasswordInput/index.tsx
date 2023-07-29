import React, { forwardRef, InputHTMLAttributes, Ref, useState } from 'react'

import { ClosedEyeIcon, LockIcon, OpenedEyeIcon } from '@/assets/icons'

import { TextInput } from '..'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {}

// eslint-disable-next-line react/display-name
export const PasswordInput = forwardRef(
  (props: PasswordInputProps, ref: Ref<HTMLInputElement>) => {
    const [inputType, setInputType] = useState('password')

    const handleInputTypeChange = () => {
      setInputType((type) => (type === 'password' ? 'text' : 'password'))
    }

    return (
      <TextInput>
        <TextInput.LeftIcon icon={LockIcon} />
        <TextInput.Input type={inputType} placeholder="Password" ref={ref} {...props} />
        <button
          onClick={handleInputTypeChange}
          className="pr-4 text-secondary-400 outline-none"
        >
          <div className="h-5 w-5">
            {inputType === 'password' ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
          </div>
        </button>
      </TextInput>
    )
  },
)
