import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarRounded from '@material-ui/icons/StarRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ffffff',
  }
})(Rating);


export default function CustomizedRatings({rating}) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">RATING</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={rating}
          getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<StarRounded fontSize="inherit" />}
          readOnly
          emptyIcon={<StarRounded fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}