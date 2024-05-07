import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../Icons/logo/logoBlackBack.png';
import { LightMode } from '@mui/icons-material';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';
function LeftSideBar(props) {
    const {setSettingType}= props;
    const navigate= useNavigate();
  return (
    <Box>
        <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <ArrowBackRoundedIcon className='backButton'
         onClick={()=>navigate('/')}
          style={{border:'2px solid black',padding:'7px',borderRadius: '9px',marginLeft:'10px'}}/>
        <Box width={'100%'} display={'flex'} flexDirection={'column'}  alignItems={'center'}>
       
        <img width={'18%'} style={{borderRadius:'50px'}} alt="PlayWithAI" margin={'auto'} src={logo} />
        <Typography variant={'h3'} margin={'auto'} fontSize={'1rem'} fontFamily={'cursive'} fontWeight={'bold'}>Play with AI</Typography>
      </Box>
      </Box>
      <hr/>
      <Stack>
        <Box className="SettingList" style={{backgroundColor:'#525150',display:'flex',padding:'5px',borderRadius:'7px',
        margin:'0px 7px'
        }}
        onClick={()=>setSettingType("Mode")}
        >
           <LightMode/> <Typography>Dark-Mode</Typography>
        </Box>
        <Box className="SettingList" style={{backgroundColor:'#525150',display:'flex',padding:'5px',borderRadius:'7px',
        margin:'7px'
        }}
        onClick={()=>setSettingType("PdfStyle")}
        >
           <FormatColorFillIcon/> <Typography>Pdf-Style</Typography>
        </Box>
        
      </Stack>
    </Box>
  )
}

export default LeftSideBar