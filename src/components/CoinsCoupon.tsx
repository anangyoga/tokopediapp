import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";

const CoinsCoupon = () => {
  return (
    <Box sx={{ backgroundColor: "#04cf71", minHeight: 34, borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", padding: 1, position: "relative" }}>
      <Paper elevation={3} sx={{ width: "95%", margin: "auto", display: "flex", alignItems: "center", padding: 1, position: "absolute", zIndex: 100, top: 10, right: 0, left: 0 }}>
        <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: 1 }}>
          <AccountBalanceWalletOutlinedIcon fontSize="small" />
          <Box sx={{ paddingLeft: 1 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, lineHeight: 1 }} component="p">
              GoPay & Coins
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: "#04cf71", lineHeight: 1, fontWeight: 600 }}>
              Aktifkan
            </Typography>
          </Box>
        </Box>
        <Box sx={{ cursor: "pointer", display: "flex", flexGrow: 0.5, justifyContent: "center", alignItems: "center" }}>
          <HexagonOutlinedIcon fontSize="small" />
          <Box sx={{ paddingLeft: 1 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, lineHeight: 1 }} component="p">
              Silver
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: "#808080", lineHeight: 1, fontWeight: 500 }}>
              16 Kupon
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CoinsCoupon;
