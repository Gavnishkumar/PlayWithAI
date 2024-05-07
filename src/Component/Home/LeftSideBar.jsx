import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Chip from '@mui/material/Chip';
import logo from '../../Icons/logo/logoBlackBack.png';
import { Settings } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const LeftSideBar = ({ chat, setChat, allChat, setAllChat, index, setIndex }) => {
  //   const dummyTitleList=[{
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },
  //   {
  //     title:"Who is virat Kohli? "
  //   },{
  //     title:"Who is virat Kohli? "
  //   },{
  //     title:"Who is virat Kohli? "
  //   },{
  //     title:"Who is virat Kohli? "
  //   },{
  //     title:"Who is virat Kohli? "
  //   },{
  //     title:"Who is virat Kohli? "
  //   },
  // ]
  const navigate= useNavigate();
  const handleClick = (ind) => {
    const arrayCopy = allChat;
    arrayCopy[index] = chat;
    setIndex(ind);
    setAllChat(arrayCopy);
    setChat(allChat[ind]);
  }
  const handleDelete = () => {

  }
  const handleCreateNewChat = () => {
    const arrayCopy = allChat;
    arrayCopy[index] = chat;
    arrayCopy.push([]);
    setIndex(index + 1);
    setAllChat(arrayCopy);
    setChat([]);
  }
  return (
    <Box>
      <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <img width={'18%'} style={{borderRadius:'50px'}} alt='playWithAI' margin={'auto'} src={logo} />
        <Typography variant={'h3'} margin={'auto'} fontSize={'1rem'} fontFamily={'cursive'} fontWeight={'bold'}>Play with AI</Typography>
      </Box>
      <hr />
      <Box width={'100%'} display={'flex'} justifyContent={'center'}>
        <Button onClick={handleCreateNewChat} size="large" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#4d4d4d', color: 'white', width: '91%' }}>
          <span>New Chat </span><AddBoxIcon />
        </Button>
      </Box>
      <Stack spacing={1} margin={'10px'} height={'67vh'} overflow={'scroll'} style={{
        scrollbarWidth: 'none'
      }}>
        {allChat.map((element, ind) => {
          return (
            <Chip
              label={element.length > 0 ? element[0].question : "New Chat"}
              style={{
                fontFamily: 'cursive',
                fontWeight: 'bold',
                padding: '10px'

              }}
              variant={'#606060'}
              onClick={() => handleClick(ind)}
              onDelete={handleDelete}
            />
          )
        })}

      </Stack>
     <div>
      <div className='User-details'  onClick={()=> navigate('/profile')}>
      <Avatar style={{height:'25px',width:'25px'}}/>
      <Typography style={{paddingLeft:'10px'
      }}> User</Typography>
      </div>
      <div className='User-details'onClick={()=> navigate('/setting')} >
      <Settings/>
      <Typography style={{paddingLeft:'10px'
      }} > Setting</Typography>
      </div>
      </div>
     
    </Box>
  )
}

export default LeftSideBar