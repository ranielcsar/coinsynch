export function InputError({ message }: { message?: string }) {
  if (!message) return <></>

  return <span className="text-sm text-quartenary-500">{message}</span>
}
