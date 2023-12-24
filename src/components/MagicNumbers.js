import { IconButton, TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
const MagicNumbers = () => {
  return (
    <div style={{ display: "flex" }}>
      <TextField
        id="outlined-size-small"
        defaultValue="Num 1"
        size="small"
        sx={{ pr: 2 }}
      />
      <Select
        labelId="demo-select-small-label"
        id="demo-select-extra-small"
        label="Op"
        size="small"
      >
        <MenuItem value={10}>add</MenuItem>
        <MenuItem value={20}>sub</MenuItem>
        <MenuItem value={30}>mult</MenuItem>
        <MenuItem value={40}>div</MenuItem>
      </Select>
      <TextField
        id="outlined-size-small"
        defaultValue="Num 2"
        size="small"
        sx={{ pl: 2 }}
      />
      <IconButton sx={{pl: 2}}>
          <SportsCricketIcon />
      </IconButton>
    </div>
  );
};

export default MagicNumbers;
