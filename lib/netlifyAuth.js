import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: netlifyIdentity.currentUser() !== null,
  user: null,
  initialize(callback) {
    console.log('in init');
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      console.log('init', user);
      callback(user)
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    console.log('set to true')
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false
    console.log('set to false')
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      callback()
    })
  },
}

export default netlifyAuth

