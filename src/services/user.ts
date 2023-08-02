export const loggedUserKey = '@coinsynch:logged_user'

export type UserProps = {
  id: number
  email: string;
  name: string;
  password: string;
  wallet: {
    id: string
    holdings: number
  }[];
}

export function getUser(): UserProps | null {
  const user = localStorage.getItem(loggedUserKey)

  if (user) return JSON.parse(user)

  return null
}

export function saveLoggedUser(user: UserProps) {
  localStorage.setItem(loggedUserKey, JSON.stringify(user))
}

export function logout() {
  localStorage.removeItem(loggedUserKey)
}