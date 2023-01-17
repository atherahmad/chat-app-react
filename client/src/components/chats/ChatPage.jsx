import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from 'react';

function ChatPage() {

    const [chatList, setChatList] =  useState([]);
    const [singleChat, setSingleChat] =  useState({});

    const [errMessage, setErrMessage] =useState("");

    const fetchChatData = async () => {
        try{
        const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/chat`);
        setChatList(response.data.chats)

    }catch(error){
        console.log(error)
        setErrMessage(error.message)
    }
}
    const fetchSingleChat = async () => {
        try{
        const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/chat/testing`);
        setSingleChat({text:response.data.chat})

    }catch(error){
        console.log(error)
        setErrMessage(error.message)
    }
}
    return (
        <div>
            <Button variant='contained' onClick={fetchChatData}>Fetch All Chat</Button>
            
            {chatList.map((chat)=><li key={chat._id}>{chat.senderName}</li>)}

            <Button variant='contained' onClick={fetchSingleChat}>Fetch Single Chat</Button>
            
            {singleChat.text?<li>{singleChat.text}</li>:null}
            
            {errMessage ? <p>{errMessage}</p> : null}
        </div>
    )
}
export default ChatPage
