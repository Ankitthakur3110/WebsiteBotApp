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

type NavbarProps = {
  links: string[];
  ctaButton: { label: string; href: string };
};

const Navbar = ({ links, ctaButton }: NavbarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {links.map((text) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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