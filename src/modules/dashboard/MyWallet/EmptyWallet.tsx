import { EmptyWalletIcon } from '@/assets/icons'

export function EmptyWallet() {
  return (
    <div className="my-4 flex min-h-[30vh] flex-col items-center gap-2 px-4 md:min-h-[35vh] md:py-8">
      <span className="h-24 w-20 md:w-24">
        <EmptyWalletIcon />
      </span>

      <div className="text-center">
        <h4>Nothing here yet...</h4>
        <p className="m-0">Add a crypto and start earning</p>
      </div>
    </div>
  )
}
