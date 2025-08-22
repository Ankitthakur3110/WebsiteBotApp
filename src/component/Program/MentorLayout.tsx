import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import two from '../../assets/images/two.svg';


const MentorLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#FDF8F4',
                width: '100%',
                px: 2,
                py: 8
            }}>
            <Box
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
                        src={two}
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
                        AI & ML
                    </Typography>
                    <Typography
                        sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 800, color: '#3C404B' }}
                    >
                        Shashank Jadeja
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: 400,
                            color: '#3C404B',
                            mt: 1
                        }}
                    >
                        Senior manager at Netflix India
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-evenly',
                    width: '50%',
                    gap: 3
                }}>
                <Typography
                    sx={{
                        fontSize: { xs: '24px', sm: '28px', md: '32px' },
                        fontWeight: 800,
                        lineHeight: '48px',
                        fontFamily: 'sans-serif'
                    }}>
                    Meet your mentor
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '8px', sm: '12px', md: '16px' },
                        fontWeight: 400,
                        lineHeight: '28px',
                        fontFamily: 'sans-serif'
                    }}>
                    This is the legendary Titanic ML competition – the best, first challenge for you to dive into ML competitions and
                    familiarize yourself with how the Kaggle platform works.egendary Titanic ML competition – the best, first.
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: '9px', sm: '10px', md: '14px' },
                        fontWeight: 600,
                        lineHeight: '88px',
                        fontFamily: 'sans-serif',
                        color: '#0053E2'
                    }}>
                    See Shashank Jadeja in linkedin
                </Typography>
            </Box>
        </Box>
    )
}

export default MentorLayout; 