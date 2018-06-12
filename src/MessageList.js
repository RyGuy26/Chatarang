import React from 'react'

const MessageList =()=>{
    const messages =[
        {id:1, userName: 'Chris', body: 'Chatting up a storm, yo!'},
        {id:2, userName: 'fred', body: 'Hi, How are you'},
    ]
    return (
        <div className = "MessageList">
        {messages.map(message => <div key ={message.id}> {message.userName}: {message.body}</div>)} 
        </div>
    )
}
export default MessageList