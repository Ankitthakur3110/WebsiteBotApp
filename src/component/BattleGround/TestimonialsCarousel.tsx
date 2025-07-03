import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Avatar, Stack, IconButton, LinearProgress } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';
import Image from '../../assets/images/Image.svg';
import doubleCot from '../../assets/images/doubleCot.svg';

const testimonials = [
    {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    },
     {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    },
     {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    },
     {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    },
     {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    },
    {
        text: "We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners.",
        name: "Abhinav Bindra",
        image: "https://randomuser.me/api/portraits/men/64.jpg",
        img: `${Image}`,
        titleImg: `${doubleCot}`
    }
];

const TestimonialsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            const percent = (el.scrollLeft / maxScroll) * 100;
            setScrollProgress(percent || 0);
        };

        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollByOffset = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{ background: '#f8f9fb', py: { xs: 6, md: 8 }, px: 2, width: '100%' }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    sx={{
                        fontSize: { xs: '28px', md: '32px' },
                        fontWeight: 800,
                        color: '#3C404B'
                    }}
                >
                    Why candidates love us
                </Typography>
            </Box>

            {/* Horizontal Scrollable Cards */}
            <Box
                ref={scrollRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3,
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    p: 2,
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none'
                }}
            >
                {testimonials.map((item, idx) => (
                    <Box
                        key={idx}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        sx={{
                            flex: '0 0 auto',
                            width: { xs: '300px', sm: '400px', md: '500px' },
                            scrollSnapAlign: 'start',
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            boxShadow: 2,
                            p: 4,
                            minHeight: '250px'
                        }}
                    >
                        <img src={item.titleImg} alt="" />
                        <Typography sx={{ fontSize: '16px', color: '#3C404B', my: 2, fontWeight: 400 }}>
                            {item.text}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar src={item.img} alt={item.name} />
                            <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#3C404B' }}>
                                {item.name}
                            </Typography>
                        </Stack>
                    </Box>
                ))}
            </Box>

            {/* Progress Bar with Arrows */}
            <Box sx={{ mt: 4, px: { xs: 4, md: 20 }, position: 'relative' }}>
                <LinearProgress
                    variant="determinate"
                    value={scrollProgress}
                    sx={{
                        height: '6px',
                        borderRadius: '4px',
                        backgroundColor: '#E5E7EB',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#0053E2'
                        }
                    }}
                />
                <IconButton
                    onClick={() => scrollByOffset(-400)}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#E0EFFF',
                        color: '#0053E2',
                        '&:hover': { backgroundColor: '#D0E4FF' }
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    onClick={() => scrollByOffset(400)}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#E0EFFF',
                        color: '#0053E2',
                        '&:hover': { backgroundColor: '#D0E4FF' }
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TestimonialsCarousel;
