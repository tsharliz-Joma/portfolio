'use client';
import React, { useState, useEffect } from 'react';
import style from './Navbar.module.scss';
import content from './Navbar.content.json';
import Link from 'next/link';
import clsx from 'clsx';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import { usePathname } from 'next/navigation';
import Drawer from '@mui/material/Drawer';
const drawerWidth = 240;

const MenuItems = ({ content }) => {
  const navItems = content.navItems;
  return Object.entries(navItems).map(([key, value]) => (
    <Link
      key={key}
      color='inherit'
      href={`#${value}`}
      className={clsx(style.NavItem, {
        [style.NavItemActive]: '' === `#${value}`,
      })}
    >
      {value}
    </Link>
  ));
};

const Navbar = (props) => {
  const theme = useTheme();
  // const { window } = props;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const top_offset = 54;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= top_offset) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => {
    // Keyboard event filter
    return (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        // Because it is in brackets the evaluation of this expression if returned as a (single value) true of false
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  };

  return (
    <AppBar
      className={style.AppBar}
      style={{ backgroundColor: showBackground ? 'transparent' : `#333333` }}
    >
      <Toolbar>
        <Typography id={style.Welcome} variant='h3' fontWeight={600}>W E L C O M E</Typography>
        {isMobile ? (
          <>
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label='close'
              onClick={toggleDrawer(true)}
            >
              <MenuIcon className={style.$base_white} />
            </IconButton>
            <Drawer
              anchor='left'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <MenuItems content={content} />
            </Drawer>
          </>
        ) : (
          <Box className={clsx({ [style.Hidden]: isMobile })}>
            <MenuItems content={content} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
