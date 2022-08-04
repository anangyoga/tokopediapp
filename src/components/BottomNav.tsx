import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: "fixed", width: "100%", bottom: 0, left: 0, right: 0, maxWidth: 400, margin: "auto" }} elevation={1}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon fontSize="small" />} />
          <BottomNavigationAction label="Feed" icon={<FeedOutlinedIcon fontSize="small" />} />
          <BottomNavigationAction label="Store" icon={<StorefrontOutlinedIcon fontSize="small" />} />
          <BottomNavigationAction label="Wishlist" icon={<FavoriteBorderOutlinedIcon fontSize="small" />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon fontSize="small" />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
