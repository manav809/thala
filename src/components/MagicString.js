import { TextField } from "@mui/material";
const MagicString = () => {
  return (
    <div style={{ display: "flex" }}>
      <TextField
        id="outlined-size-small"
        defaultValue="Type here..."
        size="small"
        sx={{ pr: 2 }}
      />
    </div>
  );
};

export default MagicString;