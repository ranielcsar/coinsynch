import { Fragment, HTMLAttributes, ReactNode } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

import { CloseIcon } from '@/assets/icons'

type DrawerProps = {
  isOpen: boolean
  onClose(): void
  children: ReactNode
  direction?: 'right' | 'left'
}

export function Drawer({ isOpen, onClose, children, direction = 'right' }: DrawerProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-500 fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full ${
                direction === 'left' ? 'pr-10' : 'pl-10'
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={`${direction === 'left' ? '-' : ''}translate-x-full`}
                enterTo={`${direction === 'left' ? '-' : ''}translate-x-0`}
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom={`${direction === 'left' ? '-' : ''}translate-x-0`}
                leaveTo={`${direction === 'left' ? '-' : ''}translate-x-full`}
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="h-6 w-6 rounded-md text-secondary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={onClose}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function DrawerContent({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <div className={twMerge('relative mt-6 flex-1 px-4 sm:px-6', className)} {...props}>
      {children}
    </div>
  )
}

Drawer.Content = DrawerContent
