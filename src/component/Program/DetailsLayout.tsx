import { Box, Typography } from '@mui/material';
import React from 'react';
import detailsImage from '../../assets/images/detailsImage.svg';

const DetailsLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',            // Full height
        alignItems: 'stretch',     // Text + image aligned
      }}
    >
      {/* Left Text Section */}
      <Box
        sx={{
          flex: 1.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 6,
          px: 4,                    // Padding applied only to text side
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '28px', md: '32px' },
            fontWeight: 800,
            lineHeight: '48px',
            fontFamily: 'sans-serif',
          }}
        >
          A title for general details
        </Typography>
        <Typography>
          This is the legendary Titanic ML competition – the best, first challenge for you to dive into
          ML competitions and familiarize yourself with how the Kaggle platform works.
        </Typography>
        <Typography>
          Read on or watch the video below to explore more details. Once you’re ready to start competing, 
          click on the "Join Competition" button to create an account and gain access to the competition data. 
          Then check out Alexis Cook’s Titanic Tutorial that walks you through step by step how to make your first submission!
        </Typography>
      </Box>

      {/* Right Image Section */}
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={detailsImage}
          alt="Details"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',  // Ensures full height & width fill
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailsLayout;
