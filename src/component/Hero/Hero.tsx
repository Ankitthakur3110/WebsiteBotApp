import { Box, Typography, Button } from '@mui/material';
import HeroCard from './HeroCards';

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  variant: 'outlined' | 'contained';
  icon: string;
  bgColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
};

type HeroProps = {
  type: 'home' | 'battleground';
  heading: string;
  gradientText: string;
  cards?: CardProps[];
  description?: string;
  stats?: { label: string; value: string, img: string; }[];
  image: string;

};

const Hero = ({
  type,
  heading,
  gradientText,
  cards,
  description,
  stats,
  image,
}: HeroProps) => {
  return (
    <Box sx={{ display: 'flex ', flexDirection: "column", alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          px: 2,
        }}>
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '32px', sm: '40px', md: '48px' },
              fontFamily: 'sans-serif',
              py: 2
            }}
          >
            {heading}{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #6c63ff, #f06292)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {gradientText}
            </Box>
          </Typography>

          {type === 'home' && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                mt: 3,
                flexWrap: 'wrap'
              }}
            >
              {cards?.map((card, index) => (
                <HeroCard key={index} {...card} />
              ))}
            </Box>
          )}

          {type === 'battleground' && (
            <>
              <Typography sx={{ my: 1, fontSize: '16px', fontWeight: '600' }}>{description}</Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#0053E2', p: 2, fontSize: '14px', fontWeight: '600' }}>
                View Programs
              </Button>
            </>
          )}

        </Box>



        {/* RIGHT IMAGE */}
        <Box
          component="img"
          src={image}
          alt="Hero Graphic"
          sx={{
            flex: 1,
            maxWidth: 400,
            width: '100%',
            mx: 'auto'
          }}
        />

      </Box>


    </Box>
  );
};

export default Hero;
