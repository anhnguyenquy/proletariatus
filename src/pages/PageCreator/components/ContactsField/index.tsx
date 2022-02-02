import { useState, useEffect } from 'react'
import { Field, NestedArrayInput, Contact } from '../../subcomponents'
import { defaultItemConfigs, defaultItem } from './components'

interface Props {
  onChange: (newValue: Contact[] | null) => void
}

export const ContactsField = (props: Props): JSX.Element => {
  const { onChange } = props
  const [contacts, setContacts] = useState<Contact[] | null>([defaultItem, defaultItem])
  const initialActiveItemConfigsArray = []
  contacts.forEach((value) => {
    initialActiveItemConfigsArray.push(defaultItemConfigs)
  })
  const [activeItemConfigsArray, setActiveItemConfigsArray] = useState<
    Contact[] | null
  >(initialActiveItemConfigsArray)
  useEffect(() => {
    onChange(contacts)
  }, [contacts])
  return (
    <Field title='Contacts'>
      <NestedArrayInput<Contact>
        defaultConfigItem={defaultItemConfigs}
        itemConfigs={activeItemConfigsArray}
        setItemConfigs={setActiveItemConfigsArray}
        itemLabel='Address'
        defaultItem={defaultItem}
        onChange={(newValue: Contact[]) => {
          setContacts(newValue)
        }}
        values={contacts}
        max={3}
        description="If your page's physical location is located in several addresses, add them here."
      />
    </Field>
  )
}