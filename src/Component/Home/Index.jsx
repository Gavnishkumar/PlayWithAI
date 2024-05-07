import React, { useState } from 'react'
import LeftSideBar from './LeftSideBar'
import ChatBox from './ChatBox/ChatBox'
import Grid from '@mui/material/Grid';
const Home = () => {
  const [chat,setChat]= useState([])
  const [allChat,setAllChat]= useState([[]])
  const [index,setIndex]= useState(0)
  return (
    <div>
        <Grid container spacing={0} height={'100vh'} >
            <Grid item xs={2} backgroundColor={'grey'}>
                <LeftSideBar chat={chat} setChat={setChat} allChat={allChat} setAllChat={setAllChat} index={index} setIndex={setIndex}/>
            </Grid>
            <Grid item xs={10} style={{backgroundColor:'#c0c1c2'}} >
                <ChatBox chat={chat} setChat={setChat}/>
            </Grid>
        </Grid>
    
    </div>
  )
}

export default Home