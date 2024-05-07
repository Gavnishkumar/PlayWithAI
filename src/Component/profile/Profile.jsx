import { Box,Avatar, Button } from '@mui/material'
import React from 'react'
import { useSelect } from '../../Context/AllContext'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const {user}= useSelect()
    const navigate = useNavigate()
  return (
        <Box style={{backgroundColor:'rgb(154 153 153)',height:'100vh'}}>
            <Box style={{width:'80%',margin:'auto'}}>
                <Box style={{display:'flex', alignItems:'center'}}>
                <Avatar style={{height:'200px',width:'200px',margin:'20px'}}/>
                <div>
                    <h2>{user.username}</h2>
                    <p><i>{user.email}</i></p>
                </div>
                </Box>
                <hr/>
            </Box>
            <Box style={{width:'80%',margin:'auto',marginTop:'10px'}}>
            <Button varient='filled' onClick={()=>navigate('/')}>back</Button>
            <Button varient='filled' onClick={()=>localStorage.removeItem('user')}>logout</Button>
            </Box>
        </Box>
  )
}

export default Profile