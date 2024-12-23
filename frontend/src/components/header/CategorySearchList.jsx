import { useState } from "react";
import {
  ListItem,
  ListItemText,
  List,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const options = ["All Categories", "CAR", "Clothes", "Electronics"];

function CategorySearchList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <List
        aria-label="Device settings"
        sx={{
          borderTopRightRadius: "22px",
          borderBottomRightRadius: "22px",
          p: 0,
          bgcolor: theme.palette.myColor.main,
        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            sx={{
              width: "93px",
              textAlign: "center",
              "&:hover": { cursor: "pointer" },
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{ fontSize: "16px" }} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CategorySearchList;
