import { useState, useEffect } from 'react'
import { Field, NestedArrayInput } from '../components'
import { Contact } from '../interfaces'
import { defaultItemConfigs, defaultItem } from './components'

export const ContactsField = (): JSX.Element => {
  const [values, setValues] = useState<Contact[] | null>([defaultItem, defaultItem])
  const initialActiveItemConfigsArray = []
  values.forEach((value) => {
    initialActiveItemConfigsArray.push(defaultItemConfigs)
  })
  const [activeItemConfigsArray, setActiveItemConfigsArray] = useState<
    Contact[] | null
  >(initialActiveItemConfigsArray)
  return (
    <Field title='Contacts'>
      <NestedArrayInput<Contact>
        defaultConfigItem={defaultItemConfigs}
        itemConfigs={activeItemConfigsArray}
        setItemConfigs={setActiveItemConfigsArray}
        itemLabel='Address'
        defaultItem={defaultItem}
        onChange={(newValue: Contact[]) => {
          setValues(newValue)
        }}
        values={values}
        max={3}
        description="If your page's physical location is located in several addresses, add them here."
      />
    </Field>
  )
}