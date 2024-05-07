import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });
export default function NullChat(){
  return (
    <Grid container spacing={2} style={{display:'flex',justifyContent:'center'}}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={9} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                // bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                
              }}
              style={{height:'60vh'}}
            >
              {[ 8, 12, 16, 24].map((elevation) => (
                <div style={{backgroundColor:'#a0a1a3',display:'flex',justifyContent:'center',flexDirection:'column',borderRadius:'4px',padding:'3%'}}>
                <Typography style={{backgroundColor:'#a0a1a3',fontFamily:'cursive'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere ratione incidunt, officiis, velit eos debitis, obcaecati aut quibusdam expedita laborum. Non eligendi fugiat dicta magnam ab eveniet nostrum praesentium.</Typography>
                <Button  style={{width:'30%',margin:'auto',backgroundColor:'#6a6a6b',color:'#d4f5a4'}} >Click</Button>
                </div>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    );
}