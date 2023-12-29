import { IconButton, TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { useState } from "react";

const MagicNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Click = (event) => {
    setNum1(event.target.value);
  };
  const handleNum2Click = (event) => {
    setNum2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Number(num1) + Number(num2));
  };

  return (
    <div style={{ display: "flex", paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-size-small"
          placeholder="Num 1"
          size="small"
          sx={{ pr: 2 }}
          onChange={handleNum1Click}
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
          placeholder="Num 2"
          size="small"
          sx={{ pl: 2 }}
          onChange={handleNum2Click}
        />
        <IconButton type="submit">
          <SportsCricketIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default MagicNumbers;
