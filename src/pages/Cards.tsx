import { Box, Typography } from '@mui/material';
import Group1 from '../assets/images/Group1.svg';
import Group2 from '../assets/images/Group2.svg';
import Group3 from '../assets/images/Group3.svg';


const Cards = () => {

    const stats = [
        { label: 'Developers', value: '1000+', img: Group1 },
        { label: 'Programs', value: '10+', img: Group2 },
        { label: 'Hired', value: '100+', img: Group3 },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            {stats?.map((stat: any, idx: number) => (
                <Box key={idx} sx={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'space-between', px: 2, py: 3, backgroundColor: 'white', border: '2px', boxShadow: 2, borderRadius: '16px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ fontSize: '22px', fontWeight: 800 }}>{stat.value}</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>{stat.label}</Typography>
                    </Box>
                    <Box
                        component="img"
                        src={stat.img}
                        alt="Hero Graphic"
                        sx={{
                            flex: 1,
                            maxWidth: 100,
                            width: '20%',
                            height: '80%',
                        }}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default Cards;