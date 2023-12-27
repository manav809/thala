import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function MenuAppBar({change, darkMode}) {
  return (
    <Box>
      <AppBar position="static" color="inherit" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            #Thala          
          </Typography>
          <div>
            <IconButton size="medium" color="inherit" onClick={change} darkMode={darkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton size="medium" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <ShareIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
