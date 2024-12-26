import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}
          alt={"product"}
        />
      </Box>
      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Lorem ipsum dolor sit.</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $ 99.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, nemo, quod, quas aspernatur quae quia voluptatem
          exercitationem doloribus tempora.
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="details"
            width={80}
            height={80}
          />
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
