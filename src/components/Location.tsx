import { SwipeableDrawer, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import Divider from "@mui/material/Divider";
const Location = () => {
  const [open, setOpen] = useState<boolean>();
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#04cf71", padding: "0 0.3rem", alignItems: "center", gap: 1, color: "#fff", cursor: "pointer" }} onClick={() => setOpen(true)}>
        <FmdGoodOutlinedIcon fontSize="small" />
        <Typography variant="body2" component="p">
          Dikirim ke Jakarta
        </Typography>
        <KeyboardArrowDownOutlinedIcon fontSize="small" />
      </Box>

      <SwipeableDrawer
        disableScrollLock={true}
        sx={{
          ".MuiDrawer-paperAnchorBottom": {
            width: "100%",
            maxWidth: 400,
            margin: "auto",
            backgroundColor: "#fff",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            padding: 1,
            minHeight: "30%",
          },
        }}
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box sx={{ paddingTop: 1 }}>
          <Box style={{ display: "flex", gap: 10, padding: 5, alignItems: "center" }}>
            <CloseOutlinedIcon fontSize="small" />
            <Typography variant="subtitle2" component="div">
              Mau Kirim belanjaan kemana?
            </Typography>
          </Box>

          <Typography variant="caption" display="block" sx={{ paddingLeft: 1 }}>
            Biar pengalaman belanjamu lebih baik, pilih alamat dulu
          </Typography>
        </Box>
        <Box sx={{ paddingBottom: 1, paddingTop: 1 }}>
          <div style={{ display: "flex", padding: 5, justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <InputOutlinedIcon fontSize="small" />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" component="div">
                Masuk
              </Typography>
              <Typography variant="caption" display="block">
                Masuk dulu biar bisa memilih alamat pengirimanmu
              </Typography>
            </Box>
            <KeyboardArrowRightOutlinedIcon />
          </div>
        </Box>
        <Divider />
        <Box sx={{ paddingTop: 1 }}>
          <Box style={{ display: "flex", gap: 10, padding: 5, alignItems: "center" }}>
            <Typography variant="subtitle2" component="div">
              Mau pakai cara lain?
            </Typography>
          </Box>
        </Box>
        <Box>
          <div style={{ display: "flex", padding: 5, justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <LocationOnOutlinedIcon fontSize="small" />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" component="div">
                Pilih Kota dan Kecamatan
              </Typography>
              <Typography variant="caption" display="block">
                Sesuai tujuan pengirimanmu
              </Typography>
            </Box>
            <KeyboardArrowRightOutlinedIcon />
          </div>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Location;
