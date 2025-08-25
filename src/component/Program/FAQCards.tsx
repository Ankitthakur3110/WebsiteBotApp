import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQCards = () => {
    const faqs = [
        { question: 'Do all the finalists get placement and rewards?' },
        { question: 'Do I have to pay anything to attend the program?' },
        { question: 'Do all the finalists get placement and rewards?' },
        { question: 'Do all the finalists get placement and rewards?' },
        { question: 'Do all the finalists get placement and rewards? Do all the finalists get placement and rewards?' },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box
            sx={{
                width: '100vw',
                maxWidth: '100vw',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: {xs : 4, md : 8},
                p: { xs: '24px', md: '48px' },
                my: { xs: '1px', md: '40px' }
            }}
        >
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '24px', md: '32px' }, lineHeight: '48px', textAlign: 'start' }}>Frequently asked questions</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {faqs.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: isOpen ? '#0053E2' : '#F3F5F7',
                                color: isOpen ? '#ffffff' : '#000000',
                                borderRadius: 2,
                                boxShadow: 2,
                                p: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {item.question}
                            </Typography>
                            <IconButton onClick={() => handleToggle(index)} sx={{ color: isOpen ? '#ffffff' : '#000000' }}>
                                {isOpen ? <RemoveIcon /> : <AddIcon />}
                            </IconButton>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default FAQCards;