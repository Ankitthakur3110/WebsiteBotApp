import React from 'react';
import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../component/Navbar/Navbar';
import ProgramRoadmap from '../component/BattleGround/ProgramRoadmap';
import BattleGroundFooter from '../component/BattleGround/BattleGroundFooter';
import netflix from '../assets/images/netflix.svg';
import calendar22 from '../assets/images/calendar22.svg';
import public22 from '../assets/images/public22.svg';
import blue1 from '../assets/images/blue1.svg';
import blue2 from '../assets/images/blue2.svg';
import blue3 from '../assets/images/blue3.svg';
import blue4 from '../assets/images/blue4.svg';
import DetailsLayout from '../component/Program/DetailsLayout';
import MentorLayout from '../component/Program/MentorLayout';
import ProgramSchedule from '../component/Program/ProgramSchedule';
import FAQCards from '../component/Program/FAQCards';
import ContactSection from '../component/Program/ContactSection';


const ProgramBlueBox = [
    {
        image: `${blue2}`,
        title: 'Get mentored by the industry experts',
    },
    {
        image: `${blue1}`,
        title: 'Work with Netflix engineers on their solutions',
    },
    {
        image: `${blue3}`,
        title: 'Win the cash prize 100000 for your hard work',
    },
    {
        image: `${blue4}`,
        title: 'No interviews, finalists get offers from netflix',
    }
]


const ProgramPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
            <Navbar
                links={['For Business', 'For Developers', 'Features']}
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
                            <Box sx={{ display: 'flex ', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                                <Box sx={{ display: 'flex ', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', paddingY: { xs: '20px', sm: '24px', md: '32px' }, }}>
                                    <img src={netflix} alt="netflix" style={{ maxHeight: '60%', maxWidth: '60%' }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 4,
                                        px: 2,
                                    }}>
                                    <Typography
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{
                                            fontSize: { xs: '32px', sm: '40px', md: '48px' },
                                            fontFamily: 'sans-serif',
                                            py: 2,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Work like Netflix team to solve AR/VR inclusion
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex ', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 2, px: 2, }}>
                                    <Chip
                                        avatar={<Avatar src={public22} />}
                                        label="4 out of 20 filled"
                                        sx={{ p: '20px', backgroundColor: '#FDF4F4', fontSize: { xs: '10px', sm: '12px', md: '15px' }, fontFamily: 'regular', fontWeight: '400', cursor: 'default', pointerEvents: 'none' }}
                                    />
                                    <Chip
                                        avatar={<Avatar src={calendar22} />}
                                        label="2 Weeks left"
                                        sx={{ p: '20px', backgroundColor: '#FDF4F4', fontSize: { xs: '10px', sm: '12px', md: '15px' }, fontFamily: 'regular', fontWeight: '400', cursor: 'default', pointerEvents: 'none' }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={{ xs: 4, md: 6 }}
                                alignItems="center"
                                justifyContent="center"
                                sx={{ py: { xs: 4, md: 6, lg: 8 }, px: 2, textAlign: 'center', backgroundColor: '#F3F5F7', borderRadius: '16px', my: '16px', boxShadow: '25%' }}
                            >
                                {ProgramBlueBox.map((item, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            maxWidth: '300px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: '#0053E2',
                                                p: 2,
                                                borderRadius: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <img src={item.image} alt="alt" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                                        </Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#3C404B' }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <DetailsLayout />
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <MentorLayout />
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <ProgramRoadmap />
                        </Box>


                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            width={'100%'}
                        >
                            <ProgramSchedule />
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <FAQCards />
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <ContactSection />
                        </Box>

                    </Box>
                </Container>
            </Box>
            <BattleGroundFooter />
        </Box>
    );
};

export default ProgramPage;
