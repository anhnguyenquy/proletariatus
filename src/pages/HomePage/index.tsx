import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'
interface Props {
  loggedIn: boolean
}

export const HomePage = (props: Props): JSX.Element => {
  const { loggedIn } = props
  return (
    <>
      {
        loggedIn ? <LoggedIn /> : <NotLoggedIn />
      }
    </>
  )
}