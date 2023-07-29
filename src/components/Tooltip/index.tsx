import { ReactNode, useState } from 'react'

export function Tooltip({ children, label }: { children: ReactNode; label: string }) {
  const [tooltipStatus, setTooltipStatus] = useState(false)

  return (
    <div
      className="relative mt-0"
      onMouseEnter={() => setTooltipStatus(true)}
      onMouseLeave={() => setTooltipStatus(false)}
    >
      <div className="mr-2 cursor-pointer">{children}</div>
      {tooltipStatus && (
        <div
          role="tooltip"
          className="absolute left-3 top-[100%] z-20 w-max -translate-x-1/2 transform rounded bg-primary-500 p-4 shadow-lg transition duration-150 ease-in-out"
        >
          <div
            className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rotate-45 transform bg-primary-500"
            style={{ marginTop: '-0.3rem' }}
          />
          <p className="text-sm font-bold text-white">{label}</p>
        </div>
      )}
    </div>
  )
}
