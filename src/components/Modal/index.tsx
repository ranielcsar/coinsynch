import { HTMLAttributes, PropsWithChildren } from 'react'

import { Dialog } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

import { CloseIcon } from '@/assets/icons'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
}>

export function Modal({ isOpen = false, onClose, children }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative w-96 rounded-md border bg-white p-5"
    >
      <button className="absolute right-2 top-2" onClick={onClose}>
        <CloseIcon />
      </button>

      <Dialog.Panel className="relative min-h-[10rem]">{children}</Dialog.Panel>
    </Dialog>
  )
}

function ModalTitle({ children, className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <Dialog.Title
      className={twMerge('mt-6 text-center text-default_text', className)}
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
