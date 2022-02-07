import { useParams, Navigate } from 'react-router-dom'
import { Private, Public } from './components'

export const Offer = () => {
  const { id } = useParams()
  if (true) { // valid id 
    if (true) { // belongs to user
      return <Private />
    }
    else return <Public />
  }
  else return <Navigate to="/" />
}