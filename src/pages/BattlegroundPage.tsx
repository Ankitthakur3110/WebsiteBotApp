import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import battlegroundBanner from '../assets/images/battlegroundBanner.svg';
import iconFacebook from '../assets/images/iconFacebook.svg';
import iconInkedin from '../assets/images/iconInkedin.svg';
import iconTwitter from '../assets/images/iconTwitter.svg';
import iconGroup from '../assets/images/iconGroup.svg';
import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import Footer from '../component/Footer/Footer';
import SubscriptonCards from './SubscriptionCards';
import Cards from './Cards';

const BattlegroundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <Navbar
        links={['Programs', 'Features']}
        ctaButton={{ label: 'Talk to Us', href: '#talk' }}
      />
      <Box
        component="main"
        sx={{ flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
            <Hero
              type="battleground"
              heading="Solve real-world problems and"
              gradientText="get hired by Top Companies"
              description="Work with top engineers from leading tech companies, win rewards by impacting business outcomes!"
              image={battlegroundBanner}
            />
            <Cards />

            <Box>
              <Typography sx={{ fontSize: '32px', fontWeight: 800, textAlign: "center"  , py: 10}}>Join Our Program</Typography>
            </Box>
            <SubscriptonCards />
          </Box>
        </Container>
      </Box>
      <Footer
        year={2025}
        privacyLink="#privacy"
        socials={[
          { src: iconFacebook, alt: 'Facebook', href: '#' },
          { src: iconInkedin, alt: 'LinkedIn', href: '#' },
          { src: iconTwitter, alt: 'Twitter', href: '#' },
          { src: iconGroup, alt: 'Group', href: '#' },
        ]}
      />
    </Box>
  );
};

export default BattlegroundPage;
