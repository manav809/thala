import { IconButton, TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { useContext, useState } from "react";
import { AppContext } from "../Main";

const MagicNumbers = () => {
  const { setSuccess, setOpen } = useContext(AppContext);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [select, setSelect] = useState(10);
  const [total, setTotal] = useState(10);
  const handleNum1Click = (event) => {
    setNum1(event.target.value);
  };
  const handleNum2Click = (event) => {
    setNum2(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (select) {
      case 10:
        const val1 = Number(num1) + Number(num2);
        setTotal(val1);
        if (val1 === 7) {
          setSuccess(true);
        } else {
          setOpen(true);
        }
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
        break;
      case 20:
        const val2 = Number(num1) - Number(num2);
        setTotal(val2);
        if (val2 === 7) {
          setSuccess(true);
        } else {
          setOpen(true);
        }
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
        break;
      case 30:
        const val3 = Number(num1) * Number(num2);
        setTotal(val3);
        if (val3 === 7) {
          setSuccess(true);
        } else {
          setOpen(true);
        }
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
        break;
      case 40:
        const val4 = Number(num1) / Number(num2);
        setTotal(val4);
        if (val4 === 7) {
          setSuccess(true);
        } else {
          setOpen(true);
        }
        setTimeout(() => {
          setSuccess(false);
        }, 7000);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: "flex", paddingTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-size-small"
          placeholder="Num 1"
          size="small"
          sx={{ pr: 2, width: 120 }}
          onChange={handleNum1Click}
        />
        <Select
          labelId="demo-select-small-label"
          id="demo-select-extra-small"
          label="Op"
          size="small"
          onChange={handleSelect}
          value={select}
          variant="standard"
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
          sx={{ pl: 2, width: 120 }}
          onChange={handleNum2Click}
        />
        <IconButton type="submit" disabled={num1 && num2 ? false : true}>
          <SportsCricketIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default MagicNumbers;
