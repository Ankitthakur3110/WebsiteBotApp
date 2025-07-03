import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import icon1 from '../../assets/images/icon1.svg';
import icon2 from '../../assets/images/icon2.svg';
import icon3 from '../../assets/images/icon3.svg';


const investors = [
  {
    name: "Sequoia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sequoia_Capital_logo.svg/320px-Sequoia_Capital_logo.svg.png",
    img : `${icon1}`
  },
  {
    name: "Elevation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Elevation_Partners_Logo.svg/320px-Elevation_Partners_Logo.svg.png",
     img : `${icon2}`
  },
  {
    name: "Accel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Accel_logo_2019.svg/320px-Accel_logo_2019.svg.png",
     img : `${icon3}`
  }
];

const BackedBy = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2, textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: { xs: '28px', md: '32px' },
          fontWeight: 800,
          color: '#3C404B',
          mb: 6
        }}
      >
        Backed by
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {investors.map((inv, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: '#FDF8F4',
              borderRadius: '16px',
              p: 8,
              width: { xs: '80%', sm: '240px', md: '300px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src={inv.img}
              alt={`${inv.name} logo`}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BackedBy;
