import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const ConnectCards = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 8, md: 10 }, width: '100%' }}>
            <Stack
                flex={1}
                direction={{ xs: 'column', md: 'row' }}
                spacing={4}
                alignItems="stretch"
                justifyContent="center"
                width={'100%'}
            >
                {/* Left Card */}
                <Box
                    sx={{

                        flex: 1,
                        backgroundColor: '#F3F5F7',
                        borderRadius: '20px',
                        p: { xs: 4, md: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: '#3C404B',
                            textDecoration: 'underline',
                            mb: 2
                        }}
                    >
                        Still have doubts?
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '28px', md: '48px' },
                            fontWeight: 800,
                            color: '#3C404B',
                            mb: 4
                        }}
                    >
                        Connect with us
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#0053E2',
                            color: '#fff',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: { xs: '12px', md: '16x' },
                            px: 4,
                            py: 1.5,
                            mt: 2,
                            width: { xs: '100%', md: 'auto' },
                            '&:hover': { backgroundColor: '#0041b3' }
                        }}
                    >
                        Lets Talk
                    </Button>
                </Box>

                {/* Right Card */}
                <Box
                    sx={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #0053E2, #0042B5)',
                        borderRadius: '20px',
                        p: { xs: 4, md: 6 },
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        justifyContent: 'space-between',
                        boxShadow: '0px 22px 44px rgba(0,83,226,0.32)'
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>
                            Ready to test you mettle?
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '28px', md: '36px' },
                                fontWeight: 800,
                                mb: 4
                            }}
                        >
                            Lets start now!
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#fff',
                            color: '#fff',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: { xs: '12px', md: '16px' },
                            px: 4,
                            py: 1.5,
                            mt: 2,
                            width: { xs: '100%', md: 'auto' },
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderColor: '#fff'
                            }
                        }}
                    >
                        Take me to programs
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default ConnectCards;
