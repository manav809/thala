import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';

export default function MenuAppBar() {
  return (
    <Box>
      <AppBar position="static" color="inherit" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            #Thala          
          </Typography>
          <div>
            <IconButton size="medium" color="inherit">
              <DarkModeIcon />
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
