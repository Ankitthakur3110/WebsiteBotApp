import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../component/Navbar/Navbar';
import BattleGroundFooter from '../component/BattleGround/BattleGroundFooter';
import SelectedProgram from '../component/EnrollFormComponent/SelectedProgram';
import EnrollmentForm from '../component/EnrollFormComponent/EnrollmentForm';


const EnrollForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <Navbar
        links={[]}
        ctaButton={{ label: 'Talk to Us', href: '#talk' }}
      />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // stack on mobile
          alignItems: 'flex-start',                   // align to top
          justifyContent: 'space-between',
          gap: 4,                                     // spacing between card and form
          p: 4
        }}
      >
        <SelectedProgram />
        <EnrollmentForm />
      </Box>
      <BattleGroundFooter />
    </Box>
  );
};

export default EnrollForm;
