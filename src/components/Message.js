import React from 'react'

export default function Message({message}) {
    return(
    <div className="Message">
        <div className="">
          <p className="">@{message.user_name}</p>
          <p className="">{message.text}</p>
        </div>
      </div>
    )
}