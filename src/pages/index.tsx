import { EmailIcon } from '@/assets/icons'
import { PasswordInput, TextInput } from '@/components'

export default function Home() {
  return (
    <main className="m-10 w-96">
      <TextInput>
        <TextInput.LeftIcon icon={EmailIcon} />
        <TextInput.Input type="email" placeholder="Email" />
      </TextInput>

      <PasswordInput placeholder="Repeat password" />
    </main>
  )
}
