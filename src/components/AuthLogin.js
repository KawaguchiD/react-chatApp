// import React, { Component } from 'react'
// import firebase from './firebase/'

// class Auth extends Component {
//   state = {
//     user: null
//   }k

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user })
//     })
//   }

//   login() {
//     const provider = new firebase.auth.GoogleAuthProvider()
//     firebase.auth().signInWithRedirect(provider)
//   }

//   logout() {
//     firebase.auth().signOut()
//   }

//   render() {
//     return (
//       <div className="App">
//         <p className="App-intro">
//           UID: {this.state.user && this.state.user.uid}
//         </p>

//         {this.state.user ? (
//           <button onClick={this.logout}>Google Logout</button>
//         ) : (
//           <button onClick={this.login}>Google Login</button>
//         )}
//       </div>
//     )
//   }
// }

// export default Auth