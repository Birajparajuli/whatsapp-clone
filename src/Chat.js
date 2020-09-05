import React, {useEffect, useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*3000));
    }, []);

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
                <p className="chat__message">
                    Hey Guys Whats going on
                </p>
                <p className="chat__message">
                    Hey Guys Whats going on
                </p>
          </div>
          <div className="chat__footer">

          </div>
            
        </div>
    )
}

export default Chat

