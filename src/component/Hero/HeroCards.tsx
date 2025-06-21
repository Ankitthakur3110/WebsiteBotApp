import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';

interface HeroCardProps {
    title: string;
    description: string;
    buttonText: string;
    variant?: 'contained' | 'outlined';
    icon?: React.ReactNode;
    bgColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
    title,
    description,
    buttonText,
    variant = 'contained',
    icon,
    bgColor,
    buttonBgColor = '#0053E2',
    buttonTextColor = '#ffffff'
}) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                gap: 2,
                p: 4,
                borderRadius: 4,
                flex: 1,
                minWidth: { xs: '100%', sm: '300px' },
                maxWidth: '100%',
                height: 'auto',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: bgColor,
            }}
        >
            <Box>
                {icon && (typeof icon === 'string' ? <img src={icon} alt="icon" width={40} height={40} /> : icon)}
            </Box>
            <Typography sx={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '700', color: '#3C404B' }}>
                {title}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', color: '#3C404B' }}>
                {description}
            </Typography>
            <Button
                variant={variant}
                fullWidth
                disableElevation
                sx={{
                    border: variant === 'outlined' ? `1px solid ${buttonBgColor}` : '1px solid transparent',
                    borderRadius: '8px',
                    fontSize: '20px',
                    fontFamily: 'sans-serif',
                    fontWeight: '700',
                    textTransform: 'none',
                    color: buttonTextColor,
                    backgroundColor: variant === 'contained' ? buttonBgColor : 'transparent',
                    '&:hover': {
                        backgroundColor: variant === 'contained' ? buttonBgColor : 'rgba(0, 0, 0, 0.04)',
                        borderColor: variant === 'outlined' ? buttonBgColor : 'transparent',
                    },
                }}
            >
                {buttonText}
            </Button>
        </Paper>
    );
};

export default HeroCard;
