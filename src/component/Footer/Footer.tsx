import React from 'react';
import { Box, Typography, Link, Stack, useTheme, useMediaQuery } from '@mui/material';
import iconFacebook from '../../assets/images/iconFacebook.svg';
import iconGroup from '../../assets/images/iconGroup.svg';
import iconInkedin from '../../assets/images/iconInkedin.svg';
import iconTwitter from '../../assets/images/iconTwitter.svg';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 4, borderTop: '1px solid #eee', flexDirection: isMobile ? 'column' : 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: '400', color: '#3C404B' }}>© 2022 BOT. All rights reserved</Typography>
        <Link href="#" underline="hover" sx={{ fontSize: '12px', fontWeight: '400', color: '#3C404B' }}>Privacy policy</Link>
      </Box>
      <Stack direction="row" spacing={1}>
        <img src={iconFacebook} alt="Facebook" width={25} height={25} />
        <img src={iconInkedin} alt="LinkedIn" width={25} height={25} />
        <img src={iconTwitter} alt="Twitter" width={25} height={25} />
        <img src={iconGroup} alt="Group" width={25} height={25} />
      </Stack>
    </Box>
  );
};

export default Footer;
