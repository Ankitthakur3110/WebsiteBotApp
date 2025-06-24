import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroCard from './HeroCards';

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  variant: 'outlined' | 'contained';
  icon: string;
  bgColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
};

type HeroProps = {
  type: 'home' | 'battleground';
  heading: string;
  gradientText: string;
  cards?: CardProps[];
  description?: string;
  stats?: { label: string; value: string }[];
  image: string;
};

const Hero = ({ type, heading, gradientText, cards, description, stats, image }: HeroProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
      <Box sx={{ flex: '1 1 400px', minWidth: 300 }}>
        <Typography fontWeight="bold" gutterBottom sx={{ fontSize: '48px', fontFamily: 'sans-serif', py: '10px' }}>
          {heading}{' '}
          <Box component="span" sx={{ background: 'linear-gradient(90deg, #6c63ff, #f06292)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {gradientText}
          </Box>
        </Typography>

        {type === 'home' && (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 5, mt: 3 }}>
            {cards?.map((card, index) => <HeroCard key={index} {...card} />)}
          </Box>
        )}

        {type === 'battleground' && (
          <>
            <Typography sx={{ my: 2 }}>{description}</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>View Programs</Button>
            <Box sx={{ display: 'flex', gap: 4, mt: 5 }}>
              {stats?.map((stat, idx) => (
                <Box key={idx}>
                  <Typography variant="h6">{stat.value}</Typography>
                  <Typography variant="caption">{stat.label}</Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>

      <Box component="img" src={image} alt="Hero Graphic" sx={{ maxWidth: 400, width: '100%', flex: '1 1 300px', mx: 'auto' }} />
    </Box>
  );
};

export default Hero;
