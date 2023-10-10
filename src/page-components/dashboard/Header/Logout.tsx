import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

import { ChevronDownIcon } from '@/assets/icons'
import { useAuth } from '@/pages/authContext'
import { logout } from '@/services/user'

export function Logout() {
  const { user } = useAuth()

  const router = useRouter()

  const handeLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="h-[1.6rem]">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="inline-flex items-center gap-1.5 rounded-md text-base font-medium focus:outline-none">
              <div className="h-7 w-7 rounded-full bg-secondary-300" />
              <p className="max-w-[15ch] truncate">{user?.name}</p>
              <ChevronDownIcon
                className={`${
                  open ? 'rotate-180' : 'rotate-0'
                } h-3 w-3 text-secondary-500 transition duration-150 ease-in-out`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-16 z-10 mt-3 w-max -translate-x-[3.5rem] transform sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-3">
                    <button onClick={handeLogout}>Logout</button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
