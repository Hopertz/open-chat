import React, { useEffect, useRef} from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const ChatPage = ({props}) => { 

  const messages = props.chatMesssages.map((msg) => (
    JSON.parse(msg.data)
  ));

  var users
  if (messages.length > 0) {
     users = messages[0].users
  } 
  const lastMessageRef = useRef(null);


  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [props]);


  return (
    <div className="chat">
      <ChatBar users={users}/>
      <div className='chat__main'>
        <ChatBody messages={messages}  lastMessageRef={lastMessageRef}/>
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatPage