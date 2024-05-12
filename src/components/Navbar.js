import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const auth= window.localStorage.getItem("email")
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: ' #34378C' }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            
            SwiftClean
           </Link>
          </Typography>
          
          {isMobile ? null : (
            <>
              {/* <a color="inherit" style={{paddingRight:"10px",textDecoration:"none",color:"white"}} href="/#home">Home</a> */}
              <a color="inherit" style={{paddingRight:"20px",textDecoration:"none",color:"white"}} href="#About">About Us</a>
              <a color="inherit" style={{paddingRight:"20px",textDecoration:"none",color:"white"}} href="#Services">Services </a>
              <Link to ="/ContactUs"color="inherit" style={{paddingRight:"20px",textDecoration:"none",color:"white"}}>Contact Us</Link>
            {/* {auth?( <Link to="/booking" color="inherit" style={{paddingRight:"10px",textDecoration:"none",color:"white"}} >booking</Link>):
            (<Link to="/Signup" color="inherit" style={{paddingRight:"10px",textDecoration:"none",color:"white"}} >booking</Link>)}  */}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;