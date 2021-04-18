import netlifyAuth from '../lib/netlifyAuth';
import Router from 'next/router'
import { useEffect, useContext } from 'react'
import AuthContext from '../lib/authContext';

export default function LoginComponent({text}) {
  const [user, setUser] = useContext(AuthContext);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setUser(user)
    })
  }, [])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setUser(user)
    });
  }

  let logout = () => {
    netlifyAuth.signout(() => {
      setUser(null)
    });
  }

  let loginElement = (user) => {
    if (user !== null) {
      return (
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
      )
    } else {
      return (
      <button className='buttonLink' onClick={login}>
        {text || 'Login'}
      </button>
      )
    }
  }

  return <AuthContext.Consumer>
        { ([user]) => { return loginElement(user) } }
      </AuthContext.Consumer>
}
