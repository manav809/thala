import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";
export default function MenuAppBar({ change, darkMode }) {
  return (
    <Box>
      <AppBar position="static" color="inherit" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            #Thala
          </Typography>
          <div>
            <Tooltip title="color">
              <IconButton
                size="medium"
                color="inherit"
                onClick={change}
                darkMode={darkMode}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="github">
              <IconButton size="medium" color="inherit" href="http://www.github.com/manav809/thala" >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="share">
              <IconButton size="medium" color="inherit">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
