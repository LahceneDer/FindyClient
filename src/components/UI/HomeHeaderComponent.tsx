import React from "react";
import NavBarComponent from "./NavBarComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { url } from "inspector";
const HeaderBG = require("../../assets/headerbg.gif");

const HomeHeaderComponent = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={0}
      sx={{
        width: "100vw",
        height: "35vh",
        position: "relative",
        backgroundImage: `url(${HeaderBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#4f60bb",
          opacity: 0.6,
        }}
      ></div>
      <NavBarComponent />
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        sx={{ zIndex: 1 }}
      >
        <Typography
          sx={{
            color: "white",
          }}
          variant="h1"
          color="initial"
        >
          {" "}
          Findy
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
          variant="body1"
          color="initial"
        ></Typography>
        <Typography
          sx={{
            color: "white",
          }}
          variant="h4"
          color="initial"
        >
          {" "}
          Lorem Ipsum{" "}
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
          variant="body1"
          color="initial"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeHeaderComponent;
