import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";

export default function PrimarySearchAppBar() {
  const [scroll, setScroll] = useState<boolean>(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(1),
    marginLeft: 15,
    width: "55%",
    color: "#9ba19d",
    border: scroll ? "1px solid #727372" : "",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "63%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(0.9, 1, 0.9, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: "16px",
      [theme.breakpoints.up("md")]: {
        width: "19ch",
      },
    },
  }));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 64) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scroll]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ maxWidth: 400, margin: "auto", top: 0, right: 0, left: 0, backgroundColor: scroll ? "#fff" : "#04cf71", maxHeight: 57, boxShadow: "none", transition: "all 0.3s ease-in" }}>
        <Toolbar disableGutters>
          <Search>
            <SearchIconWrapper>
              <SearchIcon fontSize="small" sx={{ color: "#bac4bd" }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Cari koko anak" inputProps={{ "aria-label": "search" }} />
          </Search>

          <Box>
            <IconButton size="small" edge="end" aria-label="email">
              <EmailOutlinedIcon sx={{ color: scroll ? "black" : "white" }} />
            </IconButton>
            <IconButton size="small" edge="end" aria-label="notification">
              <NotificationsNoneOutlinedIcon sx={{ color: scroll ? "black" : "white" }} />
            </IconButton>
            <IconButton size="small" edge="end" aria-label="cart" aria-haspopup="true">
              <ShoppingCartOutlinedIcon sx={{ color: scroll ? "black" : "white" }} />
            </IconButton>
            <IconButton size="small" edge="end" aria-label="menu" aria-haspopup="true">
              <MenuOutlinedIcon sx={{ color: scroll ? "black" : "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
