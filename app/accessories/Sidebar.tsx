// components/Sidebar.js
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ListItemButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = () => {
  const drawerWidth = "20vw";

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            { text: "Background", href: "#background" },
            {
              text: "1.1 Finite Difference Operator",
              href: "#finite-difference-operator",
            },
            {
              text: "1.2 Derivative of Gaussian (DoG) Filter",
              href: "#dog-filter",
            },
            {
              text: "2.1 Image Sharpening",
              href: "#sharpening",
            },
            {
              text: "2.2 Hybrid Image",
              href: "#hybrid-image",
            },
            {
              text: "2.3 Gaussian and Laplacian Stack",
              href: "#glstacks",
            },
          ].map((item, index) => (
            <ListItemButton key={index} component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
