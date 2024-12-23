import {
  Person2Outlined,
  SearchOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CategorySearchList from "./CategorySearchList";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 0.4,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Mid() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        justifyContent: "space-between",
        alignItems: "center",
        my: 3,
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCart />
        <Typography>E-commerce</Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <CategorySearchList />
      </Search>

      <Stack direction={"row"} alignItems={"center"}
        sx={{
          order: { xs: -1, sm: 0 },
        }}
      >
        <IconButton>
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Person2Outlined />
        </IconButton>
      </Stack>
    </Container>
  );
}

export default Mid;
