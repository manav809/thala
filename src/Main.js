import { Typography } from "@mui/material";
import * as React from "react";

const styles = {
  operations: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  string: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
  },
};

export default function Main() {
  return (
    <div>
      <div style={styles.operations}>
        <Typography variant="h6">Two Magical Numbers</Typography>
      </div>
      <div style={styles.string}>
        <Typography variant="h6">Magical String</Typography>
      </div>
    </div>
  );
}
