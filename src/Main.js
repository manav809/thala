import { Typography } from "@mui/material";
import * as React from "react";
import ImageList from "./components/ImageList";
import MagicNumbers from "./components/MagicNumbers";
import MagicString from "./components/MagicString";
import VolumeSlider from "./components/VolumeSlider";
import Confetti from "react-confetti-boom";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useState, createContext } from "react";
import useSound from "use-sound";
import Song from "./assets/song.mp3";
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
    marginTop: "0.5%",
  },
  string: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5%",
  },
};
export const AppContext = createContext(null);

export default function Main() {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [play] = useSound(Song);
  return (
    <div>
      <AppContext.Provider value={{ success, setSuccess, setOpen }}>
        <div style={styles.operations}>
          <Typography variant="h6">
            <strong>Two Magical Numbers</strong>
          </Typography>
        </div>
        <div style={styles.center}>
          <MagicNumbers />
        </div>
        <div style={styles.string}>
          <Typography variant="h6">
            <strong>Magical String</strong>
          </Typography>
        </div>
        <div style={styles.center}>
          <MagicString />
        </div>
        <div style={styles.center}>
          <ImageList />
        </div>
        <div style={styles.center}>
          <VolumeSlider />
        </div>
        {success ? (
          <Confetti
            x={1}
            y={0.8}
            particleCount={5}
            deg={50}
            shapeSize={8}
            spreadDeg={5005}
            effectInterval={1000}
            effectCount={1}
            colors={["#ff577f", "#ff884b", "#ffd384", "#fff9b0", "#3498db"]}
          />
        ) : null}
        {success ? play() : null}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="error">Please Try Again!!!</Alert>
        </Snackbar>
      </AppContext.Provider>
    </div>
  );
}
