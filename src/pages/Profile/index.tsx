import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Owner, Public } from './components'

export const Profile = (): JSX.Element => {
  const { id } = useParams()
  if (true) { // id == owner
    return <Owner />
  }
  else return <Public />
}