import Image from 'next/image'

import { Button, CurrencyInput, Divider, Modal, SelectInput } from '@/components'
import { CryptoCurrency } from '@/hooks/api/useCryptoCurrencies'

type TransferCryptoProps = {
  crypto: CryptoCurrency | null
  isOpen: boolean
  onClose: () => void
}

const transferOptions = [
  {
    value: 'in',
    label: 'Transfer in',
  },
  {
    value: 'out',
    label: 'Transfer out',
  },
]

export function TransferCrypto({ crypto, isOpen, onClose }: TransferCryptoProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title className="mb-6 text-center text-2xl">Add Crypto</Modal.Title>
      <Divider className="m-0" />

      <section className="mt-4 flex items-center justify-between px-2">
        <span className="text-secondary-400">You are transfering</span>

        <div className="flex items-center gap-2">
          <Image
            src={`https://cryptoicons.org/api/icon/${crypto?.symbol.toLocaleLowerCase()}/100`}
            width={30}
            height={30}
            alt={`${crypto?.name} icon`}
          />
          <span>{crypto?.name}</span>
          <span className="text-secondary-500">{crypto?.symbol}</span>
        </div>
      </section>

      <Modal.Body className="my-6 mb-12 grid auto-rows-[3.5rem] gap-10 md:mb-14">
        <div>
          <label htmlFor="transfer" className="text-md block leading-6 text-default_text">
            Transfer
          </label>

          <SelectInput options={transferOptions} name="transfer" placeholder="Choose" />
        </div>

        <div>
          <label htmlFor="quantity" className="text-md block leading-6 text-default_text">
            Quantity
          </label>

          <CurrencyInput onValueChange={console.log} name="quantity" />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="w-full py-6 text-lg">Transfer Crypto</Button>
      </Modal.Footer>
    </Modal>
  )
}
