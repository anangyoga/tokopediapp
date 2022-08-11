import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ConnectingAirportsOutlinedIcon from "@mui/icons-material/ConnectingAirportsOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const CategoryCarousel = () => {
  const categories = [
    {
      img: <StorefrontOutlinedIcon />,
      name: "Store",
    },
    {
      img: <SportsEsportsOutlinedIcon />,
      name: "Games",
    },
    {
      img: <HikingOutlinedIcon />,
      name: "Hiking",
    },
    {
      img: <SportsBasketballOutlinedIcon />,
      name: "Sports",
    },
    {
      img: <ReceiptLongOutlinedIcon />,
      name: "Bills",
    },
    {
      img: <ConnectingAirportsOutlinedIcon />,
      name: "Travels",
    },
    {
      img: <SmartphoneOutlinedIcon />,
      name: "Gadget",
    },
    {
      img: <BuildOutlinedIcon />,
      name: "Autos",
    },
    {
      img: <ChairOutlinedIcon />,
      name: "Interiors",
    },
  ];
  return (
    <Swiper scrollbar={{ draggable: true }} slidesPerView={5.5} style={{ marginTop: 24 }}>
      <Box sx={{ maxWidth: 70, maxHeight: 70, display: "flex", gap: 3, paddingLeft: 1 }}>
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <Paper elevation={0} sx={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 70, height: 50 }}>
              {category.img}
              <Typography variant="subtitle2">{category.name}</Typography>
            </Paper>
          </SwiperSlide>
        ))}
      </Box>
    </Swiper>
  );
};

export default CategoryCarousel;
