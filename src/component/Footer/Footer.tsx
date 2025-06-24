import React from 'react';
import { Box, Typography, Link, Stack, useTheme, useMediaQuery } from '@mui/material';

type FooterProps = {
  year: number;
  privacyLink: string;
  socials: { src: string; alt: string; href: string }[];
};

const Footer = ({ year, privacyLink, socials }: FooterProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 4, borderTop: '1px solid #eee', flexDirection: isMobile ? 'column' : 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: '400', color: '#3C404B' }}>© {year} BOT. All rights reserved</Typography>
        <Link href={privacyLink} underline="hover" sx={{ fontSize: '12px', fontWeight: '400', color: '#3C404B' }}>Privacy policy</Link>
      </Box>
      <Stack direction="row" spacing={1}>
        {socials.map((icon, idx) => (
          <Link key={idx} href={icon.href} target="_blank">
            <img src={icon.src} alt={icon.alt} width={25} height={25} />
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Footer;
