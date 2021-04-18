import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      callback(user);
      netlifyIdentity.close()
    });
  },
  signout(callback) {
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      callback()
    })
  },
}

export default netlifyAuth

