import { InputHTMLAttributes, useState } from 'react'

import { ClosedEyeIcon, LockIcon, OpenedEyeIcon } from '@/assets/icons'
import { TextInput } from '@/components'

export function PasswordInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const [inputType, setInputType] = useState('password')

  const handleInputTypeChange = () => {
    setInputType((type) => (type === 'password' ? 'text' : 'password'))
  }

  return (
    <TextInput>
      <TextInput.LeftIcon icon={LockIcon} />
      <TextInput.Input type={inputType} placeholder="Password" {...props} />
      <button
        onClick={handleInputTypeChange}
        className="pr-4 text-secondary-400 outline-none"
      >
        {inputType === 'password' ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
      </button>
    </TextInput>
  )
}
