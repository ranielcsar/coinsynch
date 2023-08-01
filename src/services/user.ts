export const loggedUserKey = '@coinsynch:logged_user'
export const allUsersKey = '@coinsynch:all_users'

export type UserProps = {
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
  const users = getAllUsers()

  localStorage.setItem(loggedUserKey, JSON.stringify(user))
  const existingUser = users.find((savedUser) => savedUser.email === user.email)

  const newUsers = users.map((savedUser) => {
    if (existingUser?.email === savedUser.email) {
      return user
    }

    return savedUser
  })

  saveAllUsers(newUsers)
}

export function saveAllUsers(users: UserProps[]) {
  localStorage.setItem(allUsersKey, JSON.stringify(users))
}

export function getAllUsers() {
  const users = localStorage.getItem(allUsersKey)

  if (users) return JSON.parse(users) as UserProps[]

  return []
}

export function addNewUser(newUser: UserProps) {
  const users = getAllUsers()

  if (!users || users.length === 0) {
    const newUsers = [
      { ...newUser }
    ]

    return saveAllUsers(newUsers)
  }

  if (users.length !== 0) {
    const existingUser = users.find((user) => user.email === newUser.email)

    if (existingUser) {
      throw new Error('User already registered')
    }

    const newUsers = [
      ...users,
      { ...newUser }
    ]

    return saveAllUsers(newUsers)
  }

  return null
}

type LoginProps = {
  email: string
  password: string
}
export function login({ email, password }: LoginProps) {
  const users = getAllUsers()

  if (users) {
    const userToLogin = users.find((user) => user.email === email && user.password === password)

    if (userToLogin) {
      saveLoggedUser(userToLogin)
      return userToLogin
    }

    throw new Error('Failed to Login')
  }
}

export function logout() {
  localStorage.removeItem(loggedUserKey)
}