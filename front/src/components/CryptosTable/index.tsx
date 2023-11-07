import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type CryptosTableProps<T> = {
  columns: ColumnDef<T, any>[]
  data?: T[]
  loading?: boolean
}

export function CryptosTable<T>({
  columns,
  data,
  loading = false,
}: CryptosTableProps<T>) {
  const table = useReactTable<T>({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (loading) return <LoadingTable />

  return (
    <table className="w-full table-auto text-left text-lg text-default_text">
      <thead className="text-sm font-normal text-secondary-500">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} scope="col" className="px-6 py-4">
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            className="border-b border-b-secondary-100 bg-white odd:bg-secondary-100"
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <td className="px-6 py-4" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function LoadingTable() {
  return (
    <div className="mb-10 grid w-full auto-rows-[1rem] gap-12">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`loading-${index}`}
          className="w-full animate-pulse bg-secondary-300 py-6"
        />
      ))}
    </div>
  )
}
