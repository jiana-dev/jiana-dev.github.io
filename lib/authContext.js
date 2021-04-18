import React from "react";
import netlifyIdentity from 'netlify-identity-widget'
import netlifyAuth from './netlifyAuth';

const user = netlifyIdentity.currentUser() 
const AuthContext = React.createContext([user, () => {}]);

export default AuthContext;
