import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { EmailIcon } from '@/assets/icons'
import { Button, CoinSynch, Modal, PasswordInput, TextInput } from '@/components'

type SignInProps = {
  isOpen: boolean
  onClose: () => void
}

const signInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
})

type SignInForm = z.infer<typeof signInSchema>

export function SignIn({ isOpen, onClose }: SignInProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0

  const handleSingIn = (data: SignInForm) => console.log({ data })

  const handleClose = () => {
    onClose()
    reset()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
        Sign in to <CoinSynch />
      </Modal.Title>

      <form onSubmit={handleSubmit(handleSingIn)}>
        <Modal.Body className="my-6 grid grid-rows-[repeat(2,3rem)] gap-6">
          <TextInput>
            <TextInput.LeftIcon icon={EmailIcon} />
            <TextInput.Input
              placeholder="Email"
              type="email"
              {...register('email', { required: true })}
            />
          </TextInput>

          <PasswordInput {...register('password', { required: true })} />
        </Modal.Body>

        <Modal.Footer className="flex flex-col items-center gap-5 text-default_text">
          <Button
            disabled={hasErrors}
            type="submit"
            className="w-full md:text-lg xl:py-6"
          >
            Sign in
          </Button>

          <span className="flex cursor-pointer flex-wrap justify-center gap-1 text-center text-sm hover:border-b">
            Don’t have an account? <strong>Sign up to</strong>{' '}
            <CoinSynch className="text-sm" />
          </span>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
