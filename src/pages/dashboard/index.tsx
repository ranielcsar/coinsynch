import { Divider } from '@/components'
import { Footer } from '@/layout/Footer'

import { CryptoInfos } from './components/CryptoInfos'
import { Header } from './components/Header'
import { MyWallet } from './components/MyWallet'
import { Sidebar } from './components/Sidebar'

export default function Dashboard() {
  return (
    <div className="xl:grid xl:grid-cols-[max-content,1fr] xl:grid-rows-[max-content,1fr,max-content]">
      <Header />

      <Sidebar />

      <main className="relative min-h-screen bg-secondary-100 xl:col-[2]">
        <CryptoInfos />

        <Divider className="max-w-screen-xl xl:hidden" />

        <MyWallet />
      </main>

      <Footer />
    </div>
  )
}
