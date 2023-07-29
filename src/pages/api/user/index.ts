import { NextApiRequest, NextApiResponse } from 'next'

import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'

interface User {
  email: string;
  name: string;
  password: string;
  wallet: {
    id: Pick<CryptoCurrency, 'id'>
    holdings: number
  }[];
}

const users: User[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      return handleGet(req, res)
    case 'POST':
      return handlePost(req, res)
    case 'PUT':
      return handlePut(req, res)
    case 'DELETE':
      return handleDelete(req, res)
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const { email } = query

  if (email) {
    const user = users.find((user) => user.email === email)
    if (!user) {
      res.status(404).json({ message: 'User not found' })
    } else {
      res.status(200).json(user)
    }
  } else {
    res.status(200).json(users)
  }
}

function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, password } = req.body
  const newUser: User = { email, name, password, wallet: [] }
  users.push(newUser)
  res.status(201).json(newUser)
}

function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { query, body } = req
  const { email } = query

  const user = users.find((user) => user.email === email)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
  } else {
    user.wallet = body.wallet
    res.status(200).json(user)
  }
}

function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req
  const { email } = query

  const index = users.findIndex((user) => user.email === email)
  if (index === -1) {
    res.status(404).json({ message: 'User not found' })
  } else {
    users.splice(index, 1)
    res.status(200).json({ message: 'User deleted successfully' })
  }
}
