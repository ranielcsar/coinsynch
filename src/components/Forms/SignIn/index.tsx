import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { EmailIcon } from '@/assets/icons'
import { Button, CoinSynch, Modal, PasswordInput, TextInput } from '@/components'
import { useToast } from '@/hooks/useToast'
import { useAuth } from '@/pages/authContext'
import { useOpenSignModal } from '@/pages/landing/hooks/useOpenSignModal'
import { userApi } from '@/services/api'
import { saveLoggedUser } from '@/services/user'

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
  const { toast } = useToast()
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  })
  const hasErrors = Object.keys(errors).length !== 0
  const { setUser } = useAuth()
  const { openSignUp } = useOpenSignModal()

  const handleSingIn = async (data: SignInForm) => {
    try {
      const response = await userApi.get('/users', {
        params: { email: data.email, password: data.password },
      })

      const user = response.data[0]
      setUser(user)
      saveLoggedUser(user)

      toast('Logged', { type: 'success' })
      router.push('/dashboard')
    } catch (error: any) {
      toast(error.message, { type: 'error' })
    }
  }

  const handleClose = () => {
    onClose()
    reset()
    clearErrors()
  }

  const goToSignUp = () => {
    handleClose()
    openSignUp()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
        Sign in to <CoinSynch />
      </Modal.Title>

      <form onSubmit={handleSubmit(handleSingIn)}>
        <Modal.Body className="my-6 grid auto-rows-[max-content] gap-6">
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
        </Modal.Body>

        <Modal.Footer className="flex flex-col items-center gap-5 text-default_text">
          <Button
            disabled={hasErrors}
            type="submit"
            className="w-full md:text-lg xl:py-6"
          >
            Sign in
          </Button>

          <button
            onClick={goToSignUp}
            type="button"
            className="flex h-max cursor-pointer flex-wrap justify-center gap-1 pb-1 text-center text-sm hover:underline hover:underline-offset-2"
          >
            Don’t have an account? <strong>Sign up to</strong>{' '}
            <CoinSynch className="text-sm" />
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
