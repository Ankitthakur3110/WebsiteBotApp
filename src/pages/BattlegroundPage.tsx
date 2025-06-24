import React from 'react';
import { Container } from '@mui/material';
import  battlegroundBanner from '../assets/images/battlegroundBanner.svg';
import iconFacebook from '../assets/images/iconFacebook.svg';
import iconInkedin from '../assets/images/iconInkedin.svg';
import iconTwitter from '../assets/images/iconTwitter.svg';
import iconGroup from '../assets/images/iconGroup.svg';
import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import Footer from '../component/Footer/Footer';

const BattlegroundPage = () => {
  return (
    <>
      <Navbar
        links={['Programs', 'Features']}
        ctaButton={{ label: 'Talk to Us', href: '#talk' }}
      />
      <Container maxWidth="xl">
        <Hero
          type="battleground"
          heading="Solve real-world problems and"
          gradientText="get hired by Top Companies"
          description="Work with top engineers from leading tech companies, win rewards by impacting business outcomes!"
          stats={[
            { label: 'Developers', value: '1000+' },
            { label: 'Programs', value: '10+' },
            { label: 'Hired', value: '100+' },
          ]}
          image={battlegroundBanner}
        />
      </Container>
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
    </>
  );
};

export default BattlegroundPage;
