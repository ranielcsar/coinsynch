import { EmailIcon, PersonIcon } from '@/assets/icons'
import { Button, CoinSync, Modal, PasswordInput, TextInput } from '@/components'
import { Checkbox } from '@/components/Checkbox'

type SignUpProps = {
  isOpen: boolean
  onClose: () => void
}

export function SignUp({ isOpen, onClose }: SignUpProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title className="flex justify-center gap-1 text-center text-2xl">
        Sign up to <CoinSync />
      </Modal.Title>

      <Modal.Body className="my-6 mb-12 grid auto-rows-[3.5rem] gap-5">
        <TextInput>
          <TextInput.LeftIcon icon={PersonIcon} />
          <TextInput.Input placeholder="Name" type="text" />
        </TextInput>

        <TextInput>
          <TextInput.LeftIcon icon={EmailIcon} />
          <TextInput.Input placeholder="Email" type="email" />
        </TextInput>

        <PasswordInput />

        <PasswordInput placeholder="Confirm password" />

        <div className="flex cursor-pointer items-start gap-1">
          <Checkbox id="accept-terms" name="accept-terms" />

          <label htmlFor="accept-terms" className="ml-2 cursor-pointer text-default_text">
            I have read and accept the <strong>Privacy Policy</strong> and{' '}
            <strong>Terms of User Sign up.</strong>
          </label>
        </div>
      </Modal.Body>

      <Modal.Footer className="flex flex-col items-center gap-5 text-default_text">
        <Button className="w-full xl:py-6 xl:text-lg">Sign up</Button>
        <span className="flex cursor-pointer flex-wrap justify-center gap-1 text-center text-sm">
          Already have and account? <strong>Sign in to</strong>{' '}
          <CoinSync className="text-sm" />
        </span>
      </Modal.Footer>
    </Modal>
  )
}
