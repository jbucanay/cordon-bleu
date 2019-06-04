import React, { Component } from "react";
import './login.scss'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";
import axios from "axios";


firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cordon-bleu-dev.firebaseapp.com"
});

class Login extends Component {
  state = {
    session: false,
    isSignedIn: false
  }
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
      if (user) {
        axios.post('/api/session', { firebaseEmail: user.email })
        // if user set session to true

      }
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login-card">

          {this.state.isSignedIn ? ( //what shows after you sign in
            <span>
              <button onClick={() => firebase.auth().signOut()}>Sign out</button>
              <h1>Welcome, {firebase.auth().currentUser.displayName}</h1>

              <img className="profile-pic" alt="profile" src={firebase.auth().currentUser.photoURL} />
              <Link to="/restaurants">
                <br />
                <button className="restaurants-button">View Restaurants</button>
              </Link>

            </span>
          ) : (
              <div>
                <h1>Sign In</h1>
                <h2 className='login-h2'>New to DoorDash? <Link to="/signup" ><button className="login-button">Sign up</button></Link></h2>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Login;
