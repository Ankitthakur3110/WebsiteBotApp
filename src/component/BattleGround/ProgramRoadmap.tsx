import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const steps = [
  {
    number: '01',
    title: 'Enroll for a program',
    description: 'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
  },
  {
    number: '02',
    title: 'Pre-qualifier round',
    description: 'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
  },
  {
    number: '03',
    title: 'Bootcamp for selected',
    description: 'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
  },
  {
    number: '04',
    title: 'Work and deliver with team on battleground',
    description: 'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
  },
  {
    number: '05',
    title: 'Placement & rewards for finalists',
    description: 'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
  }
];

const ProgramRoadmap = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2, textAlign: 'center', backgroundColor: '#F3F5F7' }}>
      <Typography
        sx={{
          fontSize: { xs: '28px', md: '32px' },
          fontWeight: 800,
          mb: 2,
          color: '#3C404B'
        }}
      >
        Program Roadmap
      </Typography>
      <Typography
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          fontSize: { xs: '14px', md: '16px' },
           fontWeight: 400,
          mb: { xs: 6, md: 8 },
          color: '#3C404B'
        }}
      >
        We partner with the top 1% of instructors to create high-impact CBCs on
        personal and professional growth for learners all over the world.
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
      >
        {steps.map((step, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: '45%', md: '28%' },
              backgroundColor: '#fff',
              borderRadius: '16px',
              boxShadow: 2,
              px: 4,
              py: 4.5,
              textAlign: 'left'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#FFEDD5',
                color: '#FB923C',
                display: 'inline-block',
                px: 2,
                py: 0.5,
                borderRadius: '8px',
                fontSize: { xs: '14px', md: '32px' },
                fontWeight: 800,
                mb: 2,
                fontFamily : 'Plus Jakarta Sans'
              }}
            >
              {step.number}
            </Box>
            <Typography
              sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 700, color: '#3C404B', mb: 1 }}
            >
              {step.title}
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 400, color: '#3C404B' }}>
              {step.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProgramRoadmap;
