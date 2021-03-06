import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';



export default class ChatBox extends Component {
  render() {
    return (
      <div className="ChatBox">
        <div className="">
          <input name='user_name' onChange={this.props.onTextChange} className=""  placeholder="名前" />
        </div>

        <textarea name='text' className="" onChange={this.props.onTextChange} />
        <button className="" onClick={this.props.onButtonClick}>送信</button>
      </div>
    );
  }
}

// export default function ChatBox(props) {
//   return(
//     <div className="ChatBox">
//       <div className="">
//         <input name='user_name' onChange={props.onTextChange} className=""  placeholder="名前" />
//       </div>

//       {/* <textarea name='text' className="" onChange={props.onTextChange} /> */}
//       <TextareaAutosize aria-label="minimum height" name="text" className="" rowsMin={3} placeholder="your text" onChange={props.onTextChange} />;
//       <button className="">送信</button>
//     </div>
//   )
// }