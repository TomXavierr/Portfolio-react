import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Menu icon for small screens */}
          <Hidden smUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          {/* Title */}
          <Typography variant="h6" component="div">
            Your Portfolio
          </Typography>

          {/* List of links on large screens */}
          <Hidden smDown>
            <List sx={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
              <ListItem >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem >
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem >
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem >
                <ListItemText primary="Sponsors" />
              </ListItem>
            </List>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {/* Add your portfolio sections as ListItems */}
          <ListItem >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
