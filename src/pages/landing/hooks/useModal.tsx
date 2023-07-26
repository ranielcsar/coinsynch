import { useLandingContext } from '../context'

export function useModal() {
  const { setSignInModalOpen, setSignUpModalOpen } = useLandingContext()

  const openSignIn = () => setSignInModalOpen(true)
  const openSignUp = () => setSignUpModalOpen(true)

  return {
    openSignIn,
    openSignUp,
  }
}
