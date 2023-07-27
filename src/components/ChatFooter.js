import React, {useState} from 'react'
import { sendMsg } from "../api";

const ChatFooter = () => {
    const [message, setMessage] = useState("")

    const handleSendMessage = (e) => {
        e.preventDefault()
        if(message.trim() && localStorage.getItem("userName")) {

          let text = {
                text: message, 
                user: localStorage.getItem("userName"), 
                type: 1,
                }

        sendMsg(JSON.stringify(text))
        }
        setMessage("")
    }
  return (
    <div className='chat__footer'>
        <form className='form' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Write message' 
            className='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            // onKeyDown={handleTyping}
            />
            <button className="sendBtn">SEND</button>
        </form>
     </div>
  )
}

export default ChatFooter