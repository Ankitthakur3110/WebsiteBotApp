import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import battlegroundBanner from '../assets/images/battlegroundBanner.svg';
import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import RewardCards from '../component/BattleGround/RewardCards';
import SubscriptionCards from '../component/BattleGround/SubscriptionCards';
import HighlightsSection from '../component/BattleGround/HighlightsSection';
import ProgramRoadmap from '../component/BattleGround/ProgramRoadmap';
import IndustryExperts from '../component/BattleGround/IndustryExperts';
import TestimonialsCarousel from '../component/BattleGround/TestimonialsCarousel';
import BackedBy from '../component/BattleGround/BackedBy';
import ConnectCards from '../component/BattleGround/ConnectCards';
import BattleGroundFooter from '../component/BattleGround/BattleGroundFooter';

const BattlegroundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <Navbar
        links={['For Business', 'For Developers']}
        ctaButton={{ label: 'Talk to Us', href: '#talk' }}
      />
      <Box
        component="main"
        sx={{ flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Hero
                type="battleground"
                heading="Solve real-world problems and"
                gradientText="get hired by Top Companies"
                description="Work with top engineers from leading tech companies, win rewards by impacting business outcomes!"
                image={battlegroundBanner}
              />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <RewardCards />
            </Box>

            <Box sx={{ py: { xs: 3, md: 6, lg: 8 } }}>
              <Typography sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 800, textAlign: "center" }}>Join Our Program</Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SubscriptionCards />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <HighlightsSection type="battleground" />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProgramRoadmap type="battleground" />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <IndustryExperts />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              width={'100%'}
            >
              <TestimonialsCarousel />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <BackedBy />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ConnectCards />
            </Box>

          </Box>
        </Container>
      </Box>
      <BattleGroundFooter />
    </Box>
  );
};

export default BattlegroundPage;
