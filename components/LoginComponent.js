import netlifyAuth from '../lib/netlifyAuth';
import { useEffect, useState } from 'react'

export default function LoginComponent(props) {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  let [user, setUser] = useState(null)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [loggedIn])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
      setUser(user)
      netlifyAuth.closeModal()
    })
  }

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
    })
  }

  let loginElement = loggedIn ? (
      <div>
        {user && <>Welcome {user?.user_metadata.full_name}!</>}
        <br />
        <button className='buttonLink' onClick={logout}>
          Logout
        </button>
      </div>
    ) : (
      <button className='buttonLink' onClick={login}>
        {props.text || 'Login'}
      </button>
    )

  return loginElement;
}
