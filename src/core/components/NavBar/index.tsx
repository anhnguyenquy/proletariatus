import { LoggedIn, NotLoggedIn } from './components'

interface Props {
  loggedIn: boolean,
  current?:
  | "default"
  | "friends"
  | "pages"
  | "profile"
  | "notifications"
  | "settings"
}

export const NavBar = (props: Props): JSX.Element => {
  const { loggedIn, current } = props
  return (
    <>
      {
        loggedIn ? <LoggedIn current={current} />
          : <NotLoggedIn />
      }
    </>
  )
}
