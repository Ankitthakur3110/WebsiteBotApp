import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import netflix from '../assets/images/netflix.svg';
import spotify from '../assets/images/spotify.svg';
import amazon from '../assets/images/amazon.svg';
import people from '../assets/images/people.svg';
import calendar from '../assets/images/calendar.svg';



const cardData = [
    {
        title: 'Work like Netflix team to solve AR/VR inclusion',
        enrolled: '12 Enrolled',
        seats: '4 seats left',
        date: '12 March 2020',
        duration: '2 Weeks left',
        image: `${netflix}`,
        bg: '#fff5f5'
    },
    {
        title: 'Work on Spotify auto tune machine learning algorithm',
        enrolled: '12 Enrolled',
        seats: '4 seats left',
        date: '12 March 2020',
        duration: '2 Weeks left',
        image: `${spotify}`,
        bg: '#f5fff5'
    },
    {
        title: 'Simplify Amazon’s inventory management with AI',
        enrolled: '12 Enrolled',
        seats: '4 seats left',
        date: '12 March 2020',
        duration: '2 Weeks left',
        image: `${amazon}`,
        bg: '#fffaf5'
    }
];

const SubscriptionCards = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            p: 5
        }}>
            {cardData.map((card, index) => (
                <Card key={index}
                    sx={{
                        width: { xs: '100%', sm: '45%', md: '30%' }, // responsive widths
                        borderRadius: 3,
                        boxShadow: 3,
                        p: 2,
                    }}>
                    <Box sx={{
                        backgroundColor: card.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 160,
                        borderRadius: 2
                    }}>
                        <img src={card.image} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                    </Box>
                    <CardContent>
                        <Typography gutterBottom 
                        sx={{
                            fontWeight: 700,
                            fontSize: '20px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            py: 2
                        }}>
                            {card.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                            <img src={people} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                            <Typography variant="body2" color="text.primary" sx={{fontSize : '16px' , fontWeight : 400}}>{card.enrolled}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{fontSize : '16px' , fontWeight : 400}}>{card.seats}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                            <img src={calendar} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
                            <Typography variant="body2" color="text.primary" sx={{fontSize : '16px' , fontWeight : 400}}>{card.date}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{fontSize : '16px' , fontWeight : 400}}>{card.duration}</Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ backgroundColor: '#0053E2', textTransform: 'none', fontWeight: 600, width: "100%" }}
                        >
                            View Program
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}

export default SubscriptionCards;