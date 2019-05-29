import React, { Component } from "react";
import '../login/login.scss'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";



class Signup extends Component {
    state = { isSignedIn: false };
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
        });
    };

    render() {
        return (
            <div className="login">
                <div className="login-card">

                    <h1>Sign Up</h1>
                    <h2 className='login-h2'>Already a member? <Link to="/login"><button className="login-button">Sign in</button></Link></h2>
                    {this.state.isSignedIn ? (
                        <span>
                            <div>Signed In!</div>
                            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                            <h1>Welcome, {firebase.auth().currentUser.displayName}</h1>

                            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
                        </span>
                    ) : (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        )}
                </div>
            </div>
        );
    }
}

export default Signup;
