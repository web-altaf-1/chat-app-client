import React, { useEffect, useState } from 'react';

const Chat = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState('');

    const sendMessage = async() => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                author:username,
                message : currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };
            await socket.emit('send_message',messageData);
        }
    };

    useEffect(()=>{
        socket.on("receive_message",(data)=>{

        })
    },[socket])

    return (
        <div>
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">

            </div>
            <div className="chat-footer">
                <input onChange={(event)=>{setCurrentMessage(event.target.value)}} type="text" placeholder='Hey...' />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;