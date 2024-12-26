import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import slide1 from "../../assets/slid1.jpg";
import slide2 from "../../assets/slide2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
const mySlider = [
  { text: "Classic", link: slide1 },
  { text: "Casual", link: slide2 },
];
// import required modules
import { Pagination } from "swiper/modules";
function HeroSlider() {
  const theme = useTheme();
  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={1}
      style={{ borderRadius: "10px" }}
    >
      {mySlider.map((item) => {
        return (
          <SwiperSlide key={item.link} className="parent-slider">
            <img src={item.link} alt="" />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  right: "10%",
                  textAlign: "left",
                },

                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 6,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#222",
                }}
                variant="h5"
              >
                LIFESTYLE COLLECTION
              </Typography>

              <Typography
                sx={{
                  color: "#222",
                  fontWeight: 500,
                  my: 1,
                }}
                variant="h3"
              >
                {item.text}
              </Typography>

              <Stack
                sx={{
                  justifyContent: { xs: "center", sm: "left" },
                }}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography color={"#333"} mr={1} variant="h4">
                  SALE UP TO
                </Typography>
                <Typography color={"#D23F57"} variant="h4">
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 300,
                  my: 1,
                }}
                variant="body1"
              >
                Get Free Shipping on orders over $99.00
              </Typography>

              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                }}
                variant="contained"
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSlider;
