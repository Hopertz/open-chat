const ChatBar = ({users}) => {
  
   console.log("i was called but not bottom", users)

  return (
    <div className='chat__sidebar'>
        <h2>Open Chat</h2>
        <div>
            <h4  className='chat__header'>ACTIVE USERS</h4>
            <div className='chat__users'>
                {users.map(user => <p> {user}</p>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar