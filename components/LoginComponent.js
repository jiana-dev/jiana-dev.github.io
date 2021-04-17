import netlifyIdentity from 'netlify-identity-widget';
import { useEffect } from 'react'
import Router from 'next/router'

export default function LoginComponent(props) {
  let login = () => {
    netlifyIdentity.open()
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('login', (user) => {
      console.log('login', user)
      netlifyIdentity.on('close', () => console.log('Widget closed'));
      netlifyIdentity.close()
    });
  }

  let logout = () => {
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    Router.reload(window.location.pathname);
  }

  let user = netlifyIdentity.currentUser()

  let loginElement = user !== null ? (
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
            font-family: 'B612 Mono';
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
