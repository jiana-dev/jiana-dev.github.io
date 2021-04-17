import netlifyAuth from '../lib/netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget'
import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function LoginComponent(props) {
  let [loggedIn, setLoggedIn] = useState(netlifyIdentity.currentUser() !== null)
  let [user, setUser] = useState(null)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [loggedIn])

  let login = () => {
    netlifyAuth.authenticate(() => {
      setLoggedIn(!!user)
      setUser(user)
      netlifyAuth.closeModal()
      Router.reload(window.location.pathname)
    })
  }

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
      Router.reload(window.location.pathname)
    });
  }

  let loginElement = loggedIn ? (
      <div>
        {user && <>Welcome, {user?.user_metadata.full_name}!</>}
        <button className='buttonLink ml-3' onClick={logout}>
          Logout
        </button>
        <style jsx>{`
          div {
            flex-direction: row;
            display: flex;
            align-items: center;
            font-size: small;
          }
        `}</style>

      </div>
    ) : (
      <button className='buttonLink' onClick={login}>
        {props.text || 'Login'}
      </button>
    )

  return loginElement;
}
