import { EmailIcon } from '@/assets/icons'
import { Button, CoinSynch, Modal, PasswordInput, TextInput } from '@/components'

type SignInProps = {
  isOpen: boolean
  onClose: () => void
}

export function SignIn({ isOpen, onClose }: SignInProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
        Sign in to <CoinSynch />
      </Modal.Title>

      <Modal.Body className="my-6 grid grid-rows-2 gap-6">
        <TextInput>
          <TextInput.LeftIcon icon={EmailIcon} />
          <TextInput.Input placeholder="Email" type="email" />
        </TextInput>

        <PasswordInput />
      </Modal.Body>

      <Modal.Footer className="group flex flex-col items-center gap-5 text-default_text">
        <Button className="w-full xl:py-6">Sign in</Button>
        <span className="flex cursor-pointer flex-wrap justify-center gap-1 text-center text-sm group-hover:border-b">
          Don’t have an account? <strong>Sign up to</strong>{' '}
          <CoinSynch className="text-sm" />
        </span>
      </Modal.Footer>
    </Modal>
  )
}
