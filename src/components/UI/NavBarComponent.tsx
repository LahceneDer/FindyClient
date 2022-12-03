import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import React from "react";

const NavBarComponent = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ zIndex: 1 }}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-left"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "white",
            }}
            variant="button"
            color="initial"
            mr={2}
          >
            Categories
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
            variant="button"
            color="initial"
            mr={2}
          >
            FAQ
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-right"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "white",
            }}
            variant="button"
            color="initial"
            mr={2}
          >
            Register
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
            variant="button"
            color="initial"
            mr={2}
          >
            Login
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBarComponent;
