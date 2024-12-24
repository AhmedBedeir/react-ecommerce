import { Close, ExpandMore } from "@mui/icons-material";
import {
  useTheme,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
const drawerLinks = [
  { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
  { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "full screen menu",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "user account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  {
    mainLink: "vendor account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
];
// eslint-disable-next-line react/prop-types
function DrawerList({ drawerState, setDrawerState }) {
  const theme = useTheme();
  const DrawerList = (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%" },
        mx: "auto",
        mt: 6,
        position: "relative",
        pt: 10,
      }}
      role="presentation"
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          ":hover": {
            color: theme.palette.error.light,
            rotate: "180deg",
            transition: "all 0.2s ease-in-out",
          },
        }}
        onClick={() => setDrawerState(false)}
      >
        <Close />
      </IconButton>
      {drawerLinks.map((item) => {
        return (
          <Accordion
            key={item.mainLink}
            elevation={0}
            sx={{ bgcolor: "initial" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.mainLink}</Typography>
            </AccordionSummary>

            <List sx={{ py: 0, my: 0 }}>
              {item.subLinks.map((link) => {
                return (
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Accordion>
        );
      })}
    </Box>
  );

  return (
    <Drawer
      anchor={"top"}
      open={drawerState}
      onClose={() => setDrawerState(false)}
      sx={{
        ".MuiDrawer-paperAnchorTop": {
          height: "100%",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}

export default DrawerList;
