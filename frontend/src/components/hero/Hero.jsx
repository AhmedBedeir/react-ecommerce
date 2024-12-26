import { ArrowForward } from "@mui/icons-material";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Skeleton,
} from "@mui/material";
import HeroSlider from "./HeroSlider";
import banner1 from "../../assets/banner-16.jpg";
import banner2 from "../../assets/banner-17.jpg";
import IconSection from "./IconSection";
const heroHeight = "485px";
const imgBox = {
  width: "345px",
  height: "235px",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};
const bannerBox = {
  position: "relative",
  width: "100%",
  height: "50%",
};
function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 1 },
          alignItems: "center",
          height: heroHeight,
          my: 3,
          width: "100%",
          justifyContent: "space-between",
          flex: "2 1",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "70%" },
            height: heroHeight,
            borderRadius: "10px",
          }}
        >
          <HeroSlider />
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            width: "30%",
          }}
        >
          <Box sx={{ ...bannerBox, mb: 1 }}>
            <Box sx={imgBox}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                  animation="wave"
                />
              ) : (
                <img
                  className="img-responsive animate"
                  src={banner1}
                  alt="banner"
                  style={{ borderRadius: "10px" }}
                />
              )}
            </Box>
            {!loading && (
              <Stack
                className="animate"
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: 31,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                    fontWeight: 300,
                  }}
                >
                  GAMING 4K
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  DESKTOPS &
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                  }}
                >
                  LAPTOPS
                </Typography>

                <Link
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",

                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  href="#"
                  underline="none"
                >
                  shop now
                  <ArrowForward sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            )}
          </Box>
          <Box sx={bannerBox}>
            <Box sx={imgBox}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                  animation="wave"
                />
              ) : (
                <img
                  style={{ borderRadius: "10px" }}
                  className="img-responsive animate"
                  src={banner2}
                  alt="banner"
                />
              )}
            </Box>
            {!loading && (
              <Stack
                className="animate"
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "20px",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                  }}
                >
                  NEW ARRIVALS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  SUMMER
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2B3445",
                  }}
                >
                  SALE 20% OFF
                </Typography>

                <Link
                  sx={{
                    color: "#2B3445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",

                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                  href="#"
                  underline="none"
                >
                  shop now
                  <ArrowForward sx={{ fontSize: "13px" }} />
                </Link>
              </Stack>
            )}
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}

export default Hero;
