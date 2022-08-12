import React from "react";
import { Box, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Promo = () => {
  return (
    <Swiper scrollbar={{ draggable: true }} slidesPerView={1.01} style={{ marginTop: 10, paddingLeft: 10 }}>
      <Box sx={{ display: "flex" }}>
        <SwiperSlide>
          <Paper elevation={2} sx={{ cursor: "pointer", backgroundColor: "yellow", width: "90%", height: 100 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Paper elevation={2} sx={{ cursor: "pointer", backgroundColor: "yellowgreen", width: "90%", height: 100 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Paper elevation={2} sx={{ cursor: "pointer", backgroundColor: "green", width: "90%", height: 100 }} />
        </SwiperSlide>
      </Box>
    </Swiper>
  );
};

export default Promo;
