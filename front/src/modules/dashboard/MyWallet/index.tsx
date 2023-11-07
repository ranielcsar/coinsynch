import { useState } from 'react'

import { BitcoinWalletIcon, PlusIcon } from '@/assets/icons'
import { Button } from '@/components'
import { AddCrypto } from '@/components/Forms/AddCrypto'
import { TransferCrypto } from '@/components/Forms/TransferCrypto'
import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useAuth } from '@/modules/authContext'

import { Cryptos } from './Cryptos'
import { CryptosMobile } from './CryptosMobile'
import { EmptyWallet } from './EmptyWallet'

export function MyWallet() {
  const [addWalletModalOpen, setAddWalletModalOpen] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency | null>(null)
  const { isTablet, isDesktop } = useBreakpoints()
  const { user } = useAuth()

  const wallet = user ? user.wallet : []

  return (
    <>
      <section className="mx-4 my-8 max-w-screen-xl rounded-lg bg-white shadow-lg xl:mx-auto">
        <header className="flex items-center justify-between px-4 py-5 xl:m-auto">
          <div className="flex items-center">
            <span className="mr-[0.8rem] h-8 w-8 md:h-9 md:w-9">
              <BitcoinWalletIcon />
            </span>

            <p className="text-xl font-bold">My Wallet</p>
          </div>

          <Button
            className="flex w-max items-center rounded-full px-2 py-3 md:gap-2 md:px-4"
            onClick={() => setAddWalletModalOpen(true)}
          >
            <span className="h-5 w-5 md:w-4">
              <PlusIcon />
            </span>

            <span className="hidden md:block">Add crypto</span>
          </Button>
        </header>

        {wallet.length === 0 ? (
          <EmptyWallet />
        ) : isTablet || isDesktop ? (
          <Cryptos onTradeClick={setSelectedCrypto} cryptos={wallet} />
        ) : (
          <CryptosMobile onTradeClick={setSelectedCrypto} cryptos={wallet} />
        )}
      </section>

      <AddCrypto
        isOpen={addWalletModalOpen}
        onClose={() => setAddWalletModalOpen(false)}
      />

      <TransferCrypto
        isOpen={!!selectedCrypto}
        onClose={() => setSelectedCrypto(null)}
        crypto={selectedCrypto}
      />
    </>
  )
}
