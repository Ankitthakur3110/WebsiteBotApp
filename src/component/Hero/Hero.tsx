import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import Group from '../../assets/images/Group.svg';
import HeroCard from './HeroCards';
import suitcase from '../../assets/images/suitcase.svg';
import building from '../../assets/images/building.svg';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '10px'
      }}
    >
      <Box sx={{ flex: '1 1 400px', minWidth: 300 }}>
        <Typography fontWeight="bold" gutterBottom sx={{ fontSize: '48px', fontFamily: 'sans-serif' , py:'10px' }}>
          Craft the{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(90deg, #6c63ff, #f06292)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            technology
          </Box>
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 5, mt: 3 }}>
          <HeroCard
            title="Bake the best engineers for your tech recipe!"
            description="Explore our product engineering services"
            buttonText="For Business"
            variant="outlined"
            icon={building}
            bgColor='#D7D7D7'
            buttonBgColor='#D7D7D7'
            buttonTextColor='#0053E2'
          />

          <HeroCard
            title="Cook the best tech recipes here"
            description="Win Bounty to solve real-world engineering problems & get hired"
            buttonText="For Developers →"
            variant="contained"
            icon={suitcase}
            bgColor='#FFFFFF'
             buttonBgColor='#0053E2'
            buttonTextColor='#FFFFFF'
          />
        </Box>
      </Box>
      <Box
        component="img"
        src={Group}
        alt="Hand Graphic"
        sx={{
          maxWidth: 400,
          width: '100%',
          flex: '1 1 300px',
          mx: 'auto',
        }}
      />
    </Box>
  );
};

export default Hero;
