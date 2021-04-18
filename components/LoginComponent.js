import netlifyAuth from '../lib/netlifyAuth';
import netlifyIdentity from 'netlify-identity-widget'
import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function LoginComponent({authProps, text}) {
  let user = undefined
  let loggedIn = false
  let setLoggedIn = () => {}
  let setUser = () => {}

  if(authProps){
    let {
      user,
      loggedIn,
      setLoggedIn,
      setUser,
    } = authProps
  }

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
      setUser(user)
    });
  }

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
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
        {text || 'Login'}
      </button>
    )

  return loginElement;
}
