import { Box, Typography } from '@mui/material';
import Group1 from '../../assets/images/Group1.svg';
import Group2 from '../../assets/images/Group2.svg';
import Group3 from '../../assets/images/Group3.svg';

const RewardCards = () => {

    const stats = [
        { label: 'Developers', value: '1000+', img: Group1 },
        { label: 'Programs', value: '10+', img: Group2 },
        { label: 'Hired', value: '100+', img: Group3 },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                gap: 4,
                alignItems: 'center',
                justifyContent: 'center', // center on larger screens
                p: 2
            }}
        >
            {stats?.map((stat, idx) => (
                <Box
                    key={idx}
                    sx={{
                        display: 'flex',
                        gap: 4,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: 2, md: 3 },
                        py: { xs: 2, md: 3 },
                        backgroundColor: 'white',
                        boxShadow: 2,
                        borderRadius: '16px',
                        width: { xs: '100%', sm: '80%', md: '30%' },
                        maxWidth: '300px'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, fontWeight: 800 }}>
                            {stat.value}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400 }}>
                            {stat.label}
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={stat.img}
                        alt={`${stat.label} icon`}
                        sx={{
                            maxWidth: { xs: 60, md: 80 },
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default RewardCards;
