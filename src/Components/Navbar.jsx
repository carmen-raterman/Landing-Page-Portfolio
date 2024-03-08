import React from 'react';
import { Link } from 'react-router-dom';
import Logo3 from "../Assets/Logo3.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav> 
      <div className="nav-logo-container">
        <img src={Logo3} alt="Logo" style={{ width: '500px', height: 'auto' }} />
      </div>

      <div className="navbar-links-container">
        <a href=""> Home </a>
        <a href=""> About </a>
        <a href=""> Testimonials </a>
        <a href=""> Contact </a>
        <a href="">
          <Diversity1Icon />
        </a>
        <button className="primary-button">
          Bookings Now
        </button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/" onClick={() => setOpenMenu(false)}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about" onClick={() => setOpenMenu(false)}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/testimonials" onClick={() => setOpenMenu(false)}>
                <ListItemIcon><CommentRoundedIcon /></ListItemIcon>
                <ListItemText primary="Testimonials" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/contact" onClick={() => setOpenMenu(false)}>
                <ListItemIcon><PhoneRoundedIcon /></ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
