import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import one from '../../assets/images/one.svg';
import two from '../../assets/images/two.svg';
import three from '../../assets/images/three.svg';
import four from '../../assets/images/four.svg';

const experts = [
    {
        category: 'AI & ML',
        name: 'Shashank Jadeja',
        description: "Founder at 'Make my trip' Advanced ML and AI thought leader",
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        bg: '#FEF3C7',
        imgg: `${one}`
    },
    {
        category: 'Hadoop',
        name: 'Shashank Jadeja',
        description: "Founder at 'Make my trip' Advanced ML and AI thought leader",
        img: 'https://randomuser.me/api/portraits/men/75.jpg',
        bg: '#D1FAE5',
        imgg: `${two}`
    },
    {
        category: 'AI & ML',
        name: 'Shashank Jadeja',
        description: "Founder at 'Make my trip' Advanced ML and AI thought leader",
        img: 'https://randomuser.me/api/portraits/men/33.jpg',
        bg: '#FBCFE8',
        imgg: `${three}`
    },
    {
        category: 'Hadoop',
        name: 'Shashank Jadeja',
        description: "Founder at 'Make my trip' Advanced ML and AI thought leader",
        img: 'https://randomuser.me/api/portraits/men/49.jpg',
        bg: '#FEF3C7',
        imgg: `${four}`
    }
];

const IndustryExperts = () => {
    return (
        <Box sx={{ background: 'linear-gradient(90deg, #fff4e6, #ffffff)', py: { xs: 6, md: 8 }, px: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    sx={{
                        fontSize: { xs: '28px', md: '32px' },
                        fontWeight: 800,
                        mb: 2,
                        color: '#3C404B'
                    }}
                >
                    Work with Industry Experts
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
                    personal and professional growth for learners all over.
                </Typography>
            </Box>

            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={4}
            >
                {experts.map((expert, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: { xs: '100%', sm: '45%', md: '22%' },
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            boxShadow: 2,
                            textAlign: 'left',
                            overflow: 'hidden'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '200px',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 1
                            }}
                        >
                            <img
                                src={expert.imgg}
                                alt={expert.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                        </Box>
                        <Box sx={{ p: 3 }}>
                            <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, fontWeight: 600, color: '#0053E2', mb: 1 }}>
                                {expert.category}
                            </Typography>
                            <Typography
                                sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 800, color: '#3C404B' }}
                            >
                                {expert.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    color: '#3C404B',
                                    mt: 1
                                }}
                            >
                                {expert.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default IndustryExperts;
