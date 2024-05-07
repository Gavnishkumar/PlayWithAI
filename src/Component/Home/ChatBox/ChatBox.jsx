import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Message from './Message';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import SendIcon from '@mui/icons-material/Send';
import { useVoice } from './useVoice';
import Snacker from '../../Snacker/Snacker';
import OpenAI from "openai";
import ChatSkelatan from '../../Skelatan/ChatSkelatan';
import NullChat from './NullChat';
import { Button } from '@mui/material';
import { useSelect } from '../../../Context/AllContext';
import { Link, useNavigate } from 'react-router-dom';
// import 'dotenv';
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});
const ChatBox = ({chat,setChat}) => {
  const {
    text,
    isListening,
    listen,
    setIsListening,
    voiceSupported,
  } = useVoice();
  if(voiceSupported){
    console.log("does not support by browser")
  }
  const {selectedChat} = useSelect();
  const [snackMessage,setSnackerMessage]= useState();
  const [snackType,setSnackerType] = useState();
  const [openSnack,setOpenSnack]= useState(false)
  const [textToSearch,setTextToSearch]= useState();
  const [isLoadingChat,setIsLoadingChat] = useState(false);
  const ChatContainerRef= useRef(null)
  const navigate= useNavigate();
  const handleSearchChange=(e)=>{
    e.preventDefault();
    setTextToSearch(e.target.value)
  }
  const handleStartRecord = () => {
    setTextToSearch("")
    listen()
  }
  const handleSearch=async()=>{
    if(textToSearch.length===0){
      setOpenSnack(true);
      setSnackerType("warning")
      setSnackerMessage("you can not search for NULL.")
      return;
    }
    try {
      setIsLoadingChat(true)
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: textToSearch },
        ],
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
      });
      // console.log(completion.choices[0].message.content.type);
      setChat([...chat,{question:textToSearch,answer:JSON.parse(completion.choices[0].message.content)}])
      setIsLoadingChat(false)
      setTextToSearch("")
    } catch (error) {
      console.log(error)
    }
  }
  const scrollToBottom = () => {
    if (ChatContainerRef.current) {
      ChatContainerRef.current.scrollTop = ChatContainerRef.current.scrollHeight;
    }
};

// Call scrollToBottom whenever messages change
useEffect(() => {
    scrollToBottom();
}, [chat,isLoadingChat]);
  useEffect(()=>{
    setTextToSearch(text)
  },[text])

  const handleCreateNotes=()=>{
     navigate('/pdf-create')
  }
  return (
    <Box style={{backgroundColor:'#c0c1c2'}}>
      <Box width={'100%'} margin={'auto'} style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', marginBottom: '0px',alignItem: 'center',backgroundColor:'#9fa0a4' }}>
        <h2 style={{ fontFamily: 'cursive' }}>Create docs with AI</h2>
        <Button variant="contained" style={{height: '60%'}} onClick={handleCreateNotes} disabled={chat.length===0}> 
            AddToNote
           </Button>
      </Box>
      <Box style={{ width: '90%', margin: 'auto' }}>
        <Box ref={ChatContainerRef} style={{  widht: '90%', height: '80vh', margin: 'auto', overflowY: 'scroll', marginBottom: '10px', scrollbarWidth: 'none' }}>
          {chat.length===0 && !isLoadingChat && <NullChat/>}
          {!isLoadingChat && chat.map((element) => {
            return (
            <Message message={element} />
            )
          })}
          {isLoadingChat && <ChatSkelatan/>}
        </Box>
      </Box>
      <Box style={{ width: "90%", margin: 'auto' }}>
        <TextField
          fullWidth
          required="true"
          id="question"
          // label="Text your query"
          placeholder='Type your query'
          name="question"
          value={textToSearch}
          onChange={handleSearchChange}
          backgroundColor="grey"
          InputProps={{
            endAdornment: <InputAdornment position="right">{!isListening ? <KeyboardVoiceIcon onClick={handleStartRecord} style={{
              cursor: 'pointer',
              opacity: '1',
              backgroundColor: 'gray',
              padding: '5px',
              borderRadius: '50px',
              marginRight: '10px'
            }} />:<MicOffIcon style={{
              cursor: 'pointer',
              opacity: '1',
              backgroundColor: 'gray',
              padding: '5px',
              borderRadius: '50px',
              marginRight: '10px'
            }} onClick={()=>listen()}/>}<SendIcon style={{cursor:'pointer'}} onClick={handleSearch}/></InputAdornment>,
          }}
        />
      </Box>
      <Snacker openSnack={openSnack} setOpenSnack={setOpenSnack} snackMessage={snackMessage} snackType={snackType}/>
    </Box>
  )
}
export default ChatBox