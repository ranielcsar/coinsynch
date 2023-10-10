import { Divider } from '@/components'
import { Footer } from '@/layout/Footer'
import { CryptoInfos, Header, MyWallet, Sidebar } from '@/page-components/dashboard'

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
