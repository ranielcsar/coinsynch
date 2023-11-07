import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { EmailIcon, PersonIcon } from '@/assets/icons'
import { Button, CoinSynch, Modal, PasswordInput, TextInput } from '@/components'
import { Checkbox } from '@/components/Checkbox'
import { useToast } from '@/hooks/useToast'
import { useOpenSignModal } from '@/modules/landing/hooks/useOpenSignModal'
import { userApi } from '@/services/api'

type SignUpProps = {
  isOpen: boolean
  onClose: () => void
}

const signUpSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  confirm_password: z.string().nonempty({ message: 'Password confirmation is required' }),
  accept_terms: z.literal(true),
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUp({ isOpen, onClose }: SignUpProps) {
  const { toast } = useToast()
  const { openSignIn } = useOpenSignModal()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0

  const [passwordError, setPasswordError] = useState<null | string>(null)
  const handleSingUp = async (data: SignUpForm) => {
    try {
      if (data.password !== data.confirm_password) {
        return setPasswordError('Passwords dont match')
      }
      setPasswordError(null)

      const newUser = {
        email: data.email,
        name: data.name,
        password: data.password,
        wallet: [],
      }

      await userApi.post('/users', newUser)

      toast('User cretead successfully', { type: 'success' })
      handleClose()
    } catch (err: any) {
      toast(err.message, { type: 'error' })
    }
  }

  const handleClose = () => {
    onClose()
    reset()
  }

  const goToSignIn = () => {
    handleClose()
    openSignIn()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
          Sign up to <CoinSynch />
        </Modal.Title>

        <form onSubmit={handleSubmit(handleSingUp)}>
          <Modal.Body className="my-6 mb-12 grid auto-rows-[max-content] gap-5 md:mb-6">
            <TextInput error={errors.name?.message}>
              <TextInput.LeftIcon icon={PersonIcon} />
              <TextInput.Input
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </TextInput>

            <TextInput error={errors.email?.message}>
              <TextInput.LeftIcon icon={EmailIcon} />
              <TextInput.Input
                placeholder="Email"
                type="email"
                {...register('email', { required: true })}
              />
            </TextInput>

            <PasswordInput
              error={errors.password?.message}
              {...register('password', { required: true })}
            />

            <PasswordInput
              error={errors.confirm_password?.message}
              placeholder="Confirm password"
              {...register('confirm_password', { required: true })}
            />

            {passwordError ? (
              <p className="text-quartenary-500">{passwordError}</p>
            ) : null}

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
            <button
              onClick={goToSignIn}
              type="button"
              className="flex h-max cursor-pointer select-none flex-wrap justify-center gap-1 text-center text-sm hover:underline hover:underline-offset-2 xl:text-[1rem]"
            >
              Already have and account? <strong>Sign in to</strong>{' '}
              <CoinSynch className="text-sm xl:text-[1rem]" />
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}
