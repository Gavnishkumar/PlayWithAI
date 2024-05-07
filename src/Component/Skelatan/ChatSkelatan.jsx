import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function ChatSkelatan() {
  return (
    <Stack spacing={1}>
        <Box style={{display:'flex',flexDirection:"row",marginTop:'10px'}}>
      <Skeleton variant="circular" width={50} marginTop={'2em'} height={50} />
      <Skeleton variant="rounded" height={58} marginTop={'2em'} sx={{ fontSize: '1rem',width:'100%', marginLeft:'1em' }} />
      </Box>
        <Box style={{display:'flex',flexDirection:"row"}}>
      <Skeleton variant="circular" width={50} marginTop={'2em'} height={50} />
      <Skeleton variant="rounded" height={58} marginTop={'2em'} sx={{ fontSize: '1rem',width:'100%', marginLeft:'1em' }} />
      </Box>
        <ul>
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      <Skeleton variant="rounded" width={'100%'} style={{marginTop:'12px',marginLeft:'20px'}} height={58} />
      
      </ul>
      
    </Stack>
  );
}