import React from "react";
import PropTypes from "prop-types";
import { Typography, Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import photoSets from "./photoSets.json";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 1em;
`;
const PhotoSet = ({ typeName }) => {
  return (
    <div>
      <Typography variant="h5" display="block" gutterBottom>
        {photoSets[typeName].setName}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        {photoSets[typeName].description}
      </Typography>
      {photoSets[typeName].gallery.map((m) => (
        <CardWrapper>
          <Card>
            <CardMedia component="img" image={m.url} title={m.caption} />
          </Card>
        </CardWrapper>
      ))}
    </div>
  );
};

PhotoSet.propTypes = {
  typeName: PropTypes.string.isRequired,
};
export default PhotoSet;
