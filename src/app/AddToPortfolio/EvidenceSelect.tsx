'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Evidence = [
    { evidenceName: 'Wade Cooper', evidenceType: '@wadecooper' },
    { evidenceName: 'Arlene Mccoy', evidenceType: '@arlenemccoy' },
    { evidenceName: 'Devon Webb', evidenceType: '@devonwebb' },
    { evidenceName: 'Tom Cook', evidenceType: '@tomcook' },
    { evidenceName: 'Tanya Fox', evidenceType: '@tanyafox' },
    { evidenceName: 'Hellen Schmidt', evidenceType: '@hellenschmidt' },
    { evidenceName: 'Caroline Schultz', evidenceType: '@carolineschultz' },
    { evidenceName: 'Mason Heaney', evidenceType: '@masonheaney' },
    { evidenceName: 'Claudie Smitham', evidenceType: '@claudiesmitham' },
    { evidenceName: 'Emil Schaefer', evidenceType: '@emilschaefer' },
]

export default function EvidenceSelect() {
  const [selected, setSelected] = useState(Evidence[3])

  return (
    <div className='p-3'>
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm/6 font-medium text-foreground">Evidence</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-foreground shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6">
          <span className="inline-flex w-full truncate">
            <span className="truncate">{selected.evidenceName}</span>
            <span className="ml-2 truncate text-gray-500">{selected.evidenceType}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {Evidence.map((person) => (
            <ListboxOption
              key={person.evidenceType}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-foreground data-[focus]:bg-primary data-[focus]:text-white"
            >
              <div className="flex">
                <span className="truncate font-normal group-data-[selected]:font-semibold">{person.evidenceName}</span>
                <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                  {person.evidenceType}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
    </div>
  )
}
