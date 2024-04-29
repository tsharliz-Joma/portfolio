"use client";
import React, {useState, useEffect} from "react";
import content from "./Navbar.content.json";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../ui/menu-items";

import {usePathname} from "next/navigation";
import Drawer from "@mui/material/Drawer";
const drawerWidth = 240;

const Navbar = (props) => {
  const theme = useTheme();
  const nav_items = content.navItems;
  // const { window } = props;
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => {
    // Keyboard event filter
    return (event) => {
      if (
        event &&
        event.type === "keydown" &&
        // Because it is in brackets the evaluation of this expression if returned as a (single value) true of false
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  };

  return (
    <AppBar className={`bg-gray-900`}>
      <Toolbar className="flex justify-between items-center">
        <p id="Welcome" className="flex-grow font-bold text-3xl text-white">
          W E L C O M E
        </p>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={toggleDrawer(true)}>
              <MenuIcon className="text-white" />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}>
              {nav_items.map((item, index) => (
                <MenuItems key={index} item={item} />
              ))}
            </Drawer>
          </>
        ) : (
          <div className={` ${isMobile ? "hidden" : ""}`}>
            {nav_items.map((item, index) => (
              <MenuItems key={index} item={item} />
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
