import { NavBar } from "../../core/components"
export const HomePage = (): JSX.Element => {
  return (
    <div className='home-page'>
      <NavBar loggedIn={false}/>
    </div>
  )
}