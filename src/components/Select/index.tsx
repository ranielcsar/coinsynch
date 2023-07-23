import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'

const people = [
  { name: 'Wade Cooper', image: 'https://picsum.photos/100?random=1' },
  { name: 'Arlene Mccoy', image: 'https://picsum.photos/100?random=2' },
  { name: 'Devon Webb', image: 'https://picsum.photos/100?random=3' },
  { name: 'Tom Cook', image: 'https://picsum.photos/100?random=4' },
  { name: 'Tanya Fox', image: 'https://picsum.photos/100?random=5' },
  { name: 'Hellen Schmidt', image: 'https://picsum.photos/100?random=6' },
]

export function SelectInput() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="group relative w-full cursor-pointer rounded-lg border border-secondary-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm">
          <span className="flex items-center gap-3 truncate">
            <Option image={selected.image} name={selected.name} />
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-secondary-300 group-hover:text-primary-500">
            <ChevronDownIcon />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md border border-secondary-300 bg-white py-1 text-base focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none border-b border-secondary-300 py-3 pl-3 pr-4 ${
                    active ? 'bg-primary-100 text-primary-500' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <Option image={person.image} name={person.name} selected={selected} />
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

type OptionProps = {
  image: string
  name: string
  selected?: boolean
}

function Option({ image, name, selected }: OptionProps) {
  return (
    <span
      className={`flex items-center gap-3 truncate ${
        selected ? 'font-bold text-primary-500' : 'font-normal'
      }`}
    >
      <Image
        src={image}
        alt={`Picture of ${name}`}
        width={10}
        height={10}
        className="h-6 w-6 rounded-full bg-secondary-300"
      />
      {name}
    </span>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      strokeWidth={2}
      stroke="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
}
