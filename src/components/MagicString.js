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
    console.log(string.match(regex).length); // prints 13 to the console
  };
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-size-small"
          placeholder="Type here..."
          size="small"
          onChange={handleChange}
        />
        <IconButton type="submit">
          <SportsCricketIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default MagicString;
