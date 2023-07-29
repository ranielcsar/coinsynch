import { Fragment, HTMLAttributes, PropsWithChildren } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

import { CloseIcon } from '@/assets/icons'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
}>

export function Modal({ isOpen = false, onClose, children }: ModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary-700 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 m-auto max-w-sm overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white p-4 text-left shadow-xl transition-all sm:my-8 sm:w-[95%] sm:max-w-lg xl:max-w-[29rem]">
                <button className="absolute right-4 top-4 h-5 w-5" onClick={onClose}>
                  <CloseIcon />
                </button>

                <div className="py-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function ModalTitle({ children, className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <Dialog.Title
      className={twMerge('mt-2 text-center text-default_text', className)}
      {...props}
    >
      {children}
    </Dialog.Title>
  )
}

function ModalBody({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return <section {...props}>{children}</section>
}

function ModalFooter({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return <footer {...props}>{children}</footer>
}

Modal.Title = ModalTitle
Modal.Body = ModalBody
Modal.Footer = ModalFooter
