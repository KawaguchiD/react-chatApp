import React, { Component } from 'react';
//import './App.css';
import { firebaseDb } from './firebase/index'
import Message from './components/Message'
import ChatBox from './components/ChatBox'
import ButtonAppBar from "./components/ButtonAppBar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
})
const messagesRef = firebaseDb.ref('messages')

class App extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      text : "",
      user_name: "",
      profile_image: "",
      messages : []
    }
  }
  //view
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ButtonAppBar />
        </div>
        <div className="MessageList">
          {this.state.messages.map((m, i) => {
            return <Message key={i} message={m} />
          })}
        </div>
        <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
      </div>
    );
  }
  //
  onTextChange(e) {
    if(e.target.name === 'user_name') {
      this.setState({
        "user_name": e.target.value,
      });
    } else if(e.target.name === 'profile_image') {
      this.setState({
        "profile_image": e.target.value,
      });
    } else if(e.target.name === 'text') {
      this.setState({
        "text": e.target.value,
      });
    }
  }
  //
  onButtonClick() {
    if(this.state.user_name === "") {
      alert('user_name empty')
      return
    } else if(this.state.text === "") {
      alert('text empty')
      return
    }
    messagesRef.push({
      "user_name" : this.state.user_name,
      "profile_image" : this.state.profile_image,
      "text" : this.state.text,
    })
  }
  
  componentDidMount() {
    messagesRef.on('child_added', (snapshot) => {
      const m = snapshot.val()
      let msgs = this.state.messages

      msgs.push({
        'text' : m.text,
        'user_name' : m.user_name,
        'profile_image' : m.profile_image,
      })

      this.setState({
        messages : msgs
      });
    })
  }

}

export default App;