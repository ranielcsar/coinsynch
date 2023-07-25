import { createContext, Dispatch, PropsWithChildren } from 'react'

type ContextProps = {
  signUpModalOpen: boolean
  setSignUpModalOpen: Dispatch<boolean>
  signInModalOpen: boolean
  setSignInModalOpen: Dispatch<boolean>
}

export const landingContext = createContext({} as ContextProps)

export function LandingContext({
  children,
  value,
}: PropsWithChildren<{ value: ContextProps }>) {
  const Provider = landingContext.Provider

  return <Provider value={value}>{children}</Provider>
}
