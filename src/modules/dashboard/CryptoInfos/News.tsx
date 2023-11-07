export function News() {
  return (
    <article className="md:min-h-auto col-[2] row-[2] flex w-full flex-col gap-3 rounded-lg bg-white shadow-lg md:flex-row xl:col-[3] xl:row-[1]">
      <div className="flex flex-1 flex-col p-2">
        <p className="ml-2 w-max text-sm font-bold">NFT{'’'}s NEWS</p>

        <p className="m-0 flex-1 px-1 text-sm md:m-1">New ElephantX NFT to be lauched!</p>

        <button className="hidden text-primary-500 md:ml-2 md:block md:text-left">
          Read more +
        </button>
      </div>

      <div className="h-full min-h-[5rem] w-full flex-[2] rounded-b-lg bg-secondary-400 md:flex-[1.2] md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg" />
    </article>
  )
}
