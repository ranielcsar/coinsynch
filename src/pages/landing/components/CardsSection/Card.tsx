export function Card() {
  return (
    <div className="flex h-72 w-64 flex-col gap-5 rounded-md border border-secondary-200 p-5 shadow-md">
      <div className="h-12 w-12 rounded-full bg-secondary-300" />

      <hgroup>
        <h6 className="font-bold text-primary-500">For your company</h6>
        <h4 className="font-bold">Crypto Solutions</h4>
      </hgroup>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
    </div>
  )
}
