import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { color } from '@mui/system';
import { useSelect } from '../../../Context/AllContext';
import logo from '../../../Icons/logo/logo-black.png'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Message = ({ message }) => {
  const [isChecked,setIsChecked] =useState(false);
  const {selectedChat,setSelectedChats}= useSelect();
  useEffect(()=>{
    if(isChecked===true){
      setSelectedChats([...selectedChat,message])
    }
  },[isChecked])
  const ObjectToText = (obj) => {
    if (typeof (obj) === 'string') {
      return (
        <Typography><pre style={{ textWrap: 'wrap' }}>{obj}</pre></Typography>
      )
    }
    return Object.entries(obj).map(([key, value]) => {
      return (
        <>
          {typeof(value) === 'object' ? ObjectToText(value) : <>
            <Typography>
              <pre style={{ textWrap: 'wrap' }}><strong fontWeight="bold">{key}</strong>:{" "}
                {value}
              </pre>{'\n'}
            </Typography>
          </>}
        </>
      )
    })
  }
  return (
    <Box>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} src="https://ik.imagekit.io/gavnish/test-upload_CiFZbPc0-.png?updatedAt=1691840962857" />
          <Typography style={{ fontFamily: 'fantasy' }}>
            {message.question}
          </Typography>
        </Box>
        <Checkbox onChange={(e)=> setIsChecked(e.target.checked)} {...label} />
      </Box>
      <Box style={{ display: 'flex' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} src={logo} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', wordWrap: 'break-word' }}>
          {Object.entries(message.answer).map(([key, value]) => {
            // console.log({ key, value })
            return (
              <Typography key={key} style={{ backgroundColor: `${key === 'code' ? 'black' : '#c0c1c2'}`, color: `${key === 'code' ? 'white' : 'black'}`, paddingLeft: '2em' }}>
                <strong>{key}:</strong>
                {ObjectToText(value)}
              </Typography>
            )

          })}
        </div>
        {/* <Typography style={{fontFamily:'monospace'}}>
            {message.answer[0]}
          </Typography> */}
      </Box>
    </Box>
  )
}

export default Message