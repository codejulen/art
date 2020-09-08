import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Card, Paper, Typography, Button } from "@material-ui/core";
import { NavigationWrapper, ButtonWrapper } from "./index.style";

const Navigation = ({ onBodyChange }) => {
  const onClickSkin = () => {
    onBodyChange("skin");
  };
  const onClickGrowing = () => {
    onBodyChange("growing");
  };
  const onClickPuzzle = () => {
    onBodyChange("puzzle");
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
              <Button onClick={onClickSkin}>in your skin</Button>
            </Grid>
            {/* <Grid container xs={12} sm={4}>
              <Button onClick={onClickGrowing}>growing overseas</Button>
            </Grid>
            <Grid container xs={12} sm={4}>
              <Button onClick={onClickPuzzle}>
                every frame a puzzle piece
              </Button>
            </Grid> */}
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
