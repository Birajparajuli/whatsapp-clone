import React, {useEffect, useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router';
import db from './firebase';
import { useStateValue } from './StateProvider';

import App from './App';

import firebase from 'firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput]= useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] =useState('');
    const [messages, setMessages]=useState([]);
    const [{user}, dispatch]=useStateValue();
    useEffect(()=>{
       if(roomId) {
           db.collection('rooms')
           .doc(roomId)
           .onSnapshot((snapshot)=>
               setRoomName(snapshot.data().name)
           );

           db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot=>
            (
                setMessages(snapshot.docs.map(doc=>doc.data()))
            ));
       }
    },[roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*3000));
    }, []);

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log(input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        
        setInput("");
    }


    return (
        <div className="chat">
          <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> 
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>{roomId}</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                    
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
          </div>
          <div className="chat__body">
              {messages.map(message=>(
                 <p className={`chat__message ${true && `chat__reciver`}`}>
                    <span className="chat__name">
                        {message.name}
                    </span>
                        {message.message}
                    <span className="chat__timestamp">
                        {new Date(message.timestamp?.todate()).toUTCString()}
                    </span>

                </p>               
              ))}

                
          </div>
          <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form >
                    <input value = {input} onChange ={e => setInput(e.target.value)} placeholder="Type your message here." type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
          </div>
            
        </div>
    )
}

export default Chat

