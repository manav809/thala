import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

const MagicString = () => {
  return (
    <div style={{ display: "flex" }}>
      <TextField
        id="outlined-size-small"
        defaultValue="Type here..."
        size="small"
      />
      <IconButton sx={{ pl: 2 }}>
        <SportsCricketIcon />
      </IconButton>
    </div>
  );
};

export default MagicString;
