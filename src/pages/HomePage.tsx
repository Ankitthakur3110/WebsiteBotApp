import React from 'react';
import { Box, Container } from '@mui/material';
import Group from '../assets/images/Group.svg';
import building from '../assets/images/building.svg';
import suitcase from '../assets/images/suitcase.svg';
import iconFacebook from '../assets/images/iconFacebook.svg';
import iconInkedin from '../assets/images/iconInkedin.svg';
import iconTwitter from '../assets/images/iconTwitter.svg';
import iconGroup from '../assets/images/iconGroup.svg';
import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import Footer from '../component/Footer/Footer';

const HomePage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar
        links={['For Business', 'For Developers']}
        ctaButton={{ label: 'Contact Us', href: '#contact' }}
      />
      <Box
        component="main"
        sx={{ flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', }}
      >
        <Container
          maxWidth="xl"
        >
          <Hero
            type="home"
            heading="Craft the"
            gradientText="technology"
            image={Group}
            cards={[
              {
                title: "Bake the best engineers for your tech recipe!",
                description: "Explore our product engineering services",
                buttonText: "For Business",
                variant: "outlined",
                icon: building,
                bgColor: 'transparent',
                buttonBgColor: '#D7D7D7',
                buttonTextColor: '#0053E2',
              },
              {
                title: "Cook the best tech recipes here",
                description: "Win Bounty to solve real-world engineering problems & get hired",
                buttonText: "For Developers →",
                variant: "contained",
                icon: suitcase,
                bgColor: 'transparent',
                buttonBgColor: '#0053E2',
                buttonTextColor: '#FFFFFF',
              }
            ]}
          />
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

export default HomePage;
