import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/product";

function MainContent() {
  const theme = useTheme();
  const [category, setCategory] = useState("all");
  const [categoryUrl, setCategoryUrl] = useState("products?populate=*");
  const [open, setOpen] = useState(false);
  const { data, error, isLoading } = useGetProductByNameQuery(categoryUrl);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCategory = (event, value) => {
    if (value === "all") {
      setCategoryUrl("products?populate=*");
    } else {
      setCategoryUrl(`products?populate=*&filters[category][$eq]=${value}`);
    }
    setCategory(value);
  };
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          exclusive
          value={category}
          onChange={handleCategory}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            aria-label="left aligned"
            value="all"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            aria-label="centered"
            value="men"
          >
            MEN category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            aria-label="right aligned"
            value="women"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        gap={3}
        sx={{ mt: 6 }}
      >
        <AnimatePresence>
          return (
          <>
            {isLoading && <CircularProgress />}
            {error && <div>{error.message}</div>}
            {data &&
              data.data.map((item) => (
                <Card
                  key={item.id}
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  sx={{
                    maxWidth: 360,

                    ":hover .MuiCardMedia-root ": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "all 0.6s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 240 }}
                    image={`${import.meta.env.VITE_BASE_URL}${
                      item.productImg[0].url
                    }`}
                    title="green iguana"
                  />

                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item.productTitle}
                      </Typography>

                      <Typography variant="subtitle1" component="p">
                        ${item.productPrice}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      {item.productDescription}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={handleClickOpen}
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      add to cart
                    </Button>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={item.productRating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              ))}
          </>
          );
        </AnimatePresence>
      </Stack>
      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
}

export default MainContent;
