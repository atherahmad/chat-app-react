import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from 'react';

function ChatPage() {

    const [chatList, setChatList] =  useState([]);
    const [errMessage, setErrMessage] =useState("");

    const fetchChatData = async () => {
        try{
        const response = await axios.get(`${process.env.REACT_APP_BE_URL}/apis/chat`);
        setChatList(response.data.chats)

    }catch(error){
        console.log(error)
        setErrMessage(error.message)
    }
}
    return (
        <div>
            <Button variant='contained' onClick={fetchChatData}>Fetch</Button>
            {chatList.map((chat)=><li key={chat._id}>{chat.senderName}</li>)}
            {errMessage ? <p>{errMessage}</p> : null}
        </div>
    )
}
export default ChatPage
