import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
})

export const userApi = axios.create({
  baseURL: 'http://localhost:3001',
})

export const coinIcon = (coin?: string) =>
  `https://coinicons-api.vercel.app/api/icon/${coin?.toLowerCase()}`
