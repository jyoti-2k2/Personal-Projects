import React, { useContext, useState } from 'react'
import { AppBar,Button,Icon,IconButton,Stack,Toolbar, Typography,Badge,Box, Dialog, DialogContent, DialogTitle, DialogContentText } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AboutUs from '../../pages/AboutUs';
import Cart from '../../pages/Cart';
import { Link as RouterLink } from 'react-router-dom';
import useOnlineStatus from '../../utils/customHooks/useOnlineStatus';
import CircleIcon from '@mui/icons-material/Circle';
import userContext from '../../utils/userContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogIn from '../../pages/LogIn';





const Navbar = () => {
    
    const {loggedInUser} = useContext(userContext)

    const onlineStatus = useOnlineStatus()

    const cartItems = useSelector((store)=>store.cart.items)
    const [login, setLogin] = useState(false);
    
   


  return (
    <div>
        <AppBar sx={{bgcolor:"white",  }}>
            <Toolbar>
                <IconButton edge="start" aria-label='logo' color='black'>
                    <FastfoodIcon fontSize="large"/>
                </IconButton>
                <Typography variant='h4'color="black" component="div" sx={{flexGrow:1}}>Fast Food</Typography>
                <Stack spacing={4}  direction="row" display='flex' alignItems='center'>
                    {/* <Link  sx={{textDecoration:'none'}} to="/"  color="black">Home</Link>
                    <Link  sx={{textDecoration:'none'}} to="/aboutUs"  color="black">About Us</Link>
                    <Link  sx={{textDecoration:'none'}} to="/cart"  color="black">Cart</Link> */}

                    <Icon>
                      {onlineStatus===true?<CircleIcon color='success' fontSize='small'/>:<CircleIcon color='error' fontSize='small'/>}
                    </Icon>
                    <Typography component ={RouterLink} to ="/grocery" sx={{textDecoration:'none', color:'black'}} >Grocery</Typography>
                    <Typography component={RouterLink} to="/" sx={{textDecoration:'none', color:'black'}}>Home</Typography>
                    <Typography component={RouterLink} to="/aboutUs" sx={{textDecoration:'none', color:'black'}}>About Us</Typography>
                    <Typography component={RouterLink} to="/cart" sx={{textDecoration:'none', color:'black'}}>
                         <Badge badgeContent={cartItems.length} fontSize='15px' color='primary' showZero>
                            <ShoppingCartIcon fontSize='large'/>
                         </Badge>
                         
                    </Typography>   
                    <Button onClick={()=>setLogin(true)}>Log In</Button> 
                    {login && <LogIn login={login}/>}
                    
                    
                   

                    
                   
                   
                    
                    <Typography variant='body1' color="black">  {loggedInUser}</Typography>


                </Stack>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar