import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { useContext, useState } from "react";
import { AppContext } from "../Main";

const MagicString = () => {
  const { setSuccess } = useContext(AppContext);
  const [string, setString] = useState("");

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /[a-zA-Z0-9]/g; // only count letters and numbers
    string.match(regex).length === 7 ? setSuccess(true) : setSuccess(false);
    setTimeout(() => {
      setSuccess(false);
    }, 7000);
  };
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-size-small"
          placeholder="Type here..."
          size="small"
          onChange={handleChange}
          sx={{ width: 175 }}
        />
        <IconButton type="submit">
          <SportsCricketIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default MagicString;
