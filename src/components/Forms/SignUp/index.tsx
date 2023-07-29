import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { EmailIcon, PersonIcon } from '@/assets/icons'
import { Button, CoinSynch, Modal, PasswordInput, TextInput } from '@/components'
import { Checkbox } from '@/components/Checkbox'

type SignUpProps = {
  isOpen: boolean
  onClose: () => void
}

const signUpSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  confirm_password: z.string().nonempty({ message: 'Password confirmation is required' }),
  accept_terms: z.boolean({
    required_error: 'isActive is required',
  }),
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUp({ isOpen, onClose }: SignUpProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0

  const handleSingUp = (data: SignUpForm) => console.log({ data })

  const handleClose = () => {
    onClose()
    reset()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
        Sign up to <CoinSynch />
      </Modal.Title>

      <form onSubmit={handleSubmit(handleSingUp)}>
        <Modal.Body className="my-6 mb-12 grid auto-rows-[3.5rem] gap-5 md:mb-6">
          <TextInput>
            <TextInput.LeftIcon icon={PersonIcon} />
            <TextInput.Input
              placeholder="Name"
              {...register('name', { required: true })}
            />
          </TextInput>

          <TextInput>
            <TextInput.LeftIcon icon={EmailIcon} />
            <TextInput.Input
              placeholder="Email"
              type="email"
              {...register('email', { required: true })}
            />
          </TextInput>

          <PasswordInput {...register('password', { required: true })} />

          <PasswordInput
            placeholder="Confirm password"
            {...register('confirm_password', { required: true })}
          />

          <div className="flex cursor-pointer items-start gap-1">
            <Checkbox
              id="accept_terms"
              {...register('accept_terms', { required: true })}
            />

            <label
              htmlFor="accept_terms"
              className="ml-2 cursor-pointer text-default_text"
            >
              I have read and accept the <strong>Privacy Policy</strong> and{' '}
              <strong>Terms of User Sign up.</strong>
            </label>
          </div>
        </Modal.Body>

        <Modal.Footer className="flex flex-col items-center gap-5 text-default_text">
          <Button className="w-full py-6 md:text-lg" type="submit" disabled={hasErrors}>
            Sign up
          </Button>
          <span className="flex cursor-pointer select-none flex-wrap justify-center gap-1 text-center text-sm xl:text-[1rem]">
            Already have and account? <strong>Sign in to</strong>{' '}
            <CoinSynch className="text-sm xl:text-[1rem]" />
          </span>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
