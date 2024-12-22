import { useState } from "react";
import List from "@mui/material/List";
import Listitem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
const options = ["Ar", "En"];

function LanguageList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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
      <List aria-label="Device settings">
        <Listitem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="En"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            py: 0,
            px: 1,
            m: 0,
          }}
        >
          <ListItemText
            sx={{
              ".MuiTypography-root": {
                fontSize: "14px",
                color: "#fff",
              },
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
        </Listitem>
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
            sx={{
              fontSize: "14px",
              p: "3px 10px",
              minHeight: "10px",
            }}
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

export default LanguageList;
