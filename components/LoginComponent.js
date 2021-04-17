import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function LoginComponent(props) {
  const [user, setUser] = useState(netlifyIdentity.currentUser());

  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());
  }, [])

  let login = () => {
    netlifyIdentity.open()
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('login', (user) => {
      console.log('login', user)
      netlifyIdentity.on('close', () => console.log('Widget closed'));
      netlifyIdentity.close()
      Router.reload(window.location.pathname);
    });
  }

  let logout = () => {
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    Router.reload(window.location.pathname);
  }

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
