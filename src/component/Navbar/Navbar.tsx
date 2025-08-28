import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  AppBar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import botLogo from '../../assets/images/botLogo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

type NavbarProps = {
  links: string[];
  ctaButton: { label: string; href: string };
};

const Navbar = ({ links, ctaButton }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton selected={isActive('/')} onClick={() => navigate('/')}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={isActive('/battleground')} onClick={() => navigate('/battleground')}>
            <ListItemText primary="Battleground" />
          </ListItemButton>
        </ListItem>
         <ListItem>
          <ListItemButton selected={isActive('/program')} onClick={() => navigate('/program')}>
            <ListItemText primary="Program" />
          </ListItemButton>
        </ListItem>
         <ListItem>
          <ListItemButton selected={isActive('/enrollForm')} onClick={() => navigate('/enrollForm')}>
            <ListItemText primary="enrollForm" />
          </ListItemButton>
        </ListItem>
        
        {links.map((text) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={botLogo} alt="Bot Logo" width={100} height={80} />
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              onClick={() => navigate('/')}
              variant="text"
              sx={{
                fontSize: '14px',
                fontWeight: isActive('/') ? 600 : 400,
                color: '#3C404B',
                textTransform: 'none',
                borderBottom: isActive('/') ? '2px solid #0053E2' : 'none',
                borderRadius: 0
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate('/battleground')}
              variant="text"
              sx={{
                fontSize: '14px',
                fontWeight: isActive('/battleground') ? 600 : 400,
                color: '#3C404B',
                textTransform: 'none',
                borderBottom: isActive('/battleground') ? '2px solid #0053E2' : 'none',
                borderRadius: 0
              }}
            >
              Battleground
            </Button>
             <Button
              onClick={() => navigate('/program')}
              variant="text"
              sx={{
                fontSize: '14px',
                fontWeight: isActive('/program') ? 600 : 400,
                color: '#3C404B',
                textTransform: 'none',
                borderBottom: isActive('/program') ? '2px solid #0053E2' : 'none',
                borderRadius: 0
              }}
            >
              Program
            </Button>
            <Button
              onClick={() => navigate('/enrollForm')}
              variant="text"
              sx={{
                fontSize: '14px',
                fontWeight: isActive('/enrollForm') ? 600 : 400,
                color: '#3C404B',
                textTransform: 'none',
                borderBottom: isActive('/enrollForm') ? '2px solid #0053E2' : 'none',
                borderRadius: 0
              }}
            >
              EnrollForm
            </Button>
            {links.map((link) => (
              <Button key={link} variant="text" sx={{ fontSize: '14px', fontWeight: 400, color: '#3C404B', textTransform: 'none' }}>
                {link}
              </Button>
            ))}
            <Button variant="contained" href={ctaButton.href} sx={{ textTransform: 'none', backgroundColor: '#0053E2', '&:hover': { backgroundColor: '#0041b3' } }}>
              {ctaButton.label}
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
