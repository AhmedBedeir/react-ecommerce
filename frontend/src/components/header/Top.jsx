import { Box, Chip, Typography, Stack, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightDark from "./LightDark";
import LanguageList from "./LanguageList";

const iconStyle = {
  fontSize: "16px",
  color: "#fff",
};

function Top() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        // px: "20px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"center"}>
          <Chip
            color="primary"
            label={"Hot"}
            size="small"
            style={{ margin: "5px", fontWeight: "bold" }}
            variant="outlined"
          />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#fff",
              fontWeight: "300",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <LightDark iconStyle={iconStyle} />
          <LanguageList />
          <TwitterIcon sx={iconStyle} />
          <FacebookIcon
            sx={{
              ...iconStyle,
              mx: 1,
            }}
          />
          <InstagramIcon sx={iconStyle} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Top;
