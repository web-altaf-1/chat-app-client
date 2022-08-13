import './App.css';
import io from 'socket.io-client'; 
import { useState } from 'react';
import Chat from './Chat';

const socket= io.connect('http://localhost:4000');

function App() {
  const [username,setUsername] = useState('');
  const [room,setRoom] = useState('');

  const joinRoom = ()=>{
    if(username !== '' && room !== ''){
      socket.emit('join_room',room);
    }
  }

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input onChange={(event)=>{setUsername(event.target.value)}} type="text" placeholder='John...' name="" id="" />
      <input onChange={(event)=>{setRoom(event.target.value)}} type="text" placeholder='Room Id' name="" id="" />
      <button onClick={joinRoom}>Join A Room</button>
      <Chat socket={socket} username={username} room={room}></Chat>
    </div>
  );
}

export default App;
