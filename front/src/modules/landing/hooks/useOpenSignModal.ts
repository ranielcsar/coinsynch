import { useLandingContext } from '../context'

export function useOpenSignModal() {
  const { setSignInModalOpen, setSignUpModalOpen } = useLandingContext()

  const openSignIn = () => setSignInModalOpen(true)
  const openSignUp = () => setSignUpModalOpen(true)

  return {
    openSignIn,
    openSignUp,
  }
}
