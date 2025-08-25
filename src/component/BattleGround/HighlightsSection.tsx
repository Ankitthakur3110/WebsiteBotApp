import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import star from '../../assets/images/star.svg';
import publicImg from '../../assets/images/public.svg';
import cashList from '../../assets/images/cashList.svg';

interface highlightsProps {
    type: 'program' | 'battleground'
}

const highlights = [
    {
        image: `${star}`,
        icon: <StarIcon sx={{ fontSize: 40, color: '#fff' }} />,
        title: 'Placements for finalists',
        description:
            'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
    },
    {
        image: `${cashList}`,
        icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#fff' }} />,
        title: 'Cash prizes for finalists',
        description:
            'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
    },
    {
        image: `${publicImg}`,
        icon: <GroupsIcon sx={{ fontSize: 40, color: '#fff' }} />,
        title: 'Work with top teams',
        description:
            'We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world.'
    }
];



const HighlightsSection = ({ type }: highlightsProps) => {
    return (
        <Box sx={{ py: { xs: 6, md: 8, lg: 10 }, px: 2, textAlign: 'center' }}>
            {type === 'battleground' &&
                <>
                    <Typography
                        sx={{
                            fontSize: { xs: '28px', md: '32px' },
                            fontWeight: 800,
                            mb: 2
                        }}
                    >
                        Program Highlights
                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: '700px',
                            mx: 'auto',
                            fontSize: { xs: '14px', md: '16px' },
                            fontWeight: 400,
                            mb: { xs: 6, md: 8 }
                        }}
                    >
                        We partner with the top 1% of instructors to create high-impact CBCs on
                        personal and professional growth for learners all over the world.
                    </Typography>
                </>
            }
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                justifyContent="center"
            >
                {highlights.map((item, idx) => (
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
                            <img src={item.image} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                        </Box>
                        <Typography
                            sx={{ fontSize: '20px', fontWeight: 700, color: '#3C404B' }}
                        >
                            {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#3C404B' }}>
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default HighlightsSection;
