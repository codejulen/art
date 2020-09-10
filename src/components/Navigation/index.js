import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Card, Paper, Typography, Button } from "@material-ui/core";
import { NavigationWrapper, ButtonWrapper } from "./index.style";

const Navigation = ({ onBodyChange }) => {
  const onClickSkin = () => {
    onBodyChange("skin");
  };
  const onClickDreaming = () => {
    onBodyChange("dreaming");
  };
  const onClickGrowing = () => {
    onBodyChange("growing");
  };
  return (
    <NavigationWrapper>
      <Grid container xs={12} direction="column">
        <Typography variant="h5" gutterBottom>
          julian zabala
        </Typography>
        <ButtonWrapper>
          <Grid container xs={12}>
            <Grid container xs={12} sm={4}>
              <Button onClick={onClickSkin}>
                We'll see creation come undone
              </Button>
            </Grid>
            <Grid container xs={12} sm={4}>
              <Button onClick={onClickDreaming}>
                These bones that bound will be gone
              </Button>
            </Grid>
            <Grid container xs={12} sm={4}>
              <Button onClick={onClickGrowing}>
                We'll stir our spirits 'til we're one
              </Button>
            </Grid>
          </Grid>
        </ButtonWrapper>
      </Grid>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
};

export default Navigation;
