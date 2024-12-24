import {
  ElectricBikeOutlined,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useState } from "react";
import DrawerList from "./DrawerList";
import Links from "./Links";
const menuOptions = [
  {
    icon: <ElectricBikeOutlined fontSize="small" />,
    text: "Bikes",
  },
  {
    icon: <LaptopChromebookOutlined fontSize="small" />,
    text: "Electronics",
  },
  {
    icon: <MenuBookOutlined fontSize="small" />,
    text: "Books",
  },
  {
    icon: <SportsEsportsOutlined fontSize="small" />,
    text: "Games",
  },
];

function Bottom() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerState, setDrawerState] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: 222,
          bgcolor: theme.palette.myColor.main,
          color: theme.palette.text.secondary,
        }}
      >
        <Window />
        <Typography
          sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,
          }}
        >
          Categories
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <KeyboardArrowRightOutlined />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: 220,
            bgcolor: theme.palette.myColor.main,
          },
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton
          onClick={() => {
            setDrawerState((prev) => !prev);
          }}
        >
          <MenuIcon
            sx={{
              color: theme.palette.text.secondary,
            }}
          />
        </IconButton>
      )}

      <DrawerList drawerState={drawerState} setDrawerState={setDrawerState} />
    </Container>
  );
}

export default Bottom;
