import { Typography } from "@mui/material";
import * as React from "react";
import MagicNumbers from "./components/MagicNumbers";
import MagicString from "./components/MagicString";

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  operations: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
  },
  string: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3%",
  },
};

export default function Main() {
  return (
    <div>
      <div style={styles.operations}>
        <Typography variant="h6">Two Magical Numbers</Typography>
      </div>
      <div style={styles.center}>
        <MagicNumbers />
      </div>
      <div style={styles.string}>
        <Typography variant="h6">Magical String</Typography>
      </div>
      <div style={styles.center}>
        <MagicString />
      </div>
    </div>
  );
}
