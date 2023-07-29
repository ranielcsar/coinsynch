import { Divider } from '@/components'

import { CryptoInfos } from './components/CryptoInfos'
import { Header } from './components/Header'
import { MyWallet } from './components/MyWallet'

export default function Dashboard() {
  return (
    <main className="bg-secondary-100">
      <Header />

      <CryptoInfos />

      <Divider className="max-w-screen-xl xl:m-auto" />

      <MyWallet />
    </main>
  )
}
