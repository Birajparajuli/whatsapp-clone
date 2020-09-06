import React, {useEffect, useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput]= useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*3000));
    }, []);

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log(input);

        
        setInput("");
    }


    return (
        <div className="chat">
          <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/> 
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen 3 min ago...</p>
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
                <p className={`chat__message ${true && `chat__reciver`}`}>
                    <span className="chat__name">
                        Biraj Parajuli
                    </span>
                    Hey Guys Whats going on
                    <span className="chat__timestamp">
                        3:54am
                    </span>
 
                </p>
                
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

