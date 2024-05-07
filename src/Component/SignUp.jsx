// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';
import { useState } from 'react';
import { IsEmail, IsPassword } from '../Validation/Validator';
import Snacker from './Snacker/Snacker';
import logo from '../Icons/logo/whiteLogo-no-back.png'
import { useSelect } from '../Context/AllContext';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export default function SignUp() {
  const {setUser} = useSelect();
  const navigate= useNavigate();
    const [openSnack, setOpenSnack] = useState(false);
    const [snackMessage, setSnackMessage] = useState("invalid error");
    const [snackType, setSnackType] = useState("error")
    const handleSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            confirmPassword: data.get('confirm-password')
        }
        if(user.username===""){
            setOpenSnack(true);
            setSnackMessage("Username is required")
            setSnackType("error")
            return;
        }
        if (!IsEmail(user.email)) {
            setOpenSnack(true);
            setSnackMessage("Invalid email format (ex: abc@def.ghi)")
            setSnackType("error")
            return;
        }
        if(!IsPassword(user.password)){
            setOpenSnack(true);
            setSnackMessage("Password must be of minimum 5 characters")
            setSnackType("error")
            return;
        }
        if(user.password!==user.confirmPassword){
            setOpenSnack(true);
            setSnackMessage("Both Password must be same")
            setSnackType("error")
            return;
        }
        localStorage.setItem('user',  JSON.stringify(user));
        setUser(user);
        navigate('/');
    };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            opacity:'0.9',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
        <div style={{display:'flex',flexDirection:'column'}}>
        <img src={logo} style={{margin:'auto',width:'20rem',height:'20rem'}} alt="PlayWithAI" srcset="" />
        <p style={{width:'60%',margin:'auto',color:'white',fontSize:'1.3em'}}><i>Our application combines the power of AI-generated content with user-recommended styling to help you create stunning PDFs effortlessly. Empower your ideas, craft your vision, and share them with elegance like never before.</i></p>
        </div>
                </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 0, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User name"
                name="username"
                
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account?"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snacker openSnack={openSnack} setOpenSnack={setOpenSnack} snackMessage={snackMessage} snackType={snackType} />
    </ThemeProvider>
  );
}