import React from 'react';
import { Box, Card, CardContent, Typography } from "@mui/material";
import netflix from '../../assets/images/netflix.svg';
import people from '../../assets/images/people.svg';
import calendar from '../../assets/images/calendar.svg';
import starTwo from '../../assets/images/starTwo.svg';


const programHeilights = [
  '10 out of 20 enrolled will be the finalists',
  'All finalists will get offers from Netflix. No interviews',
  'All finalists will get Rs 100000 cash prize',
  'Work with Netflix engineers'
]

const SelectedProgram = () => {
  return (
    <>
      <Box sx={{ width: '100%'}}>
        <Card
          sx={{
            width: { xs: '100%', md: '100%' },
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            display: 'flex',
            flexDirection : {xs : 'column' , md : 'row'},
            alignItems: 'center',
            justifyContent: 'space-evenly'

          }}>
          <Box sx={{
            backgroundColor: '#FDF4F4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            width: 360,
            borderRadius: 2,
            
          }}>
            <img src={netflix} alt="Company Logo" />
          </Box>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '20px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '32px',
                textAlign: 'start'
              }}>
              {'Work like Netflix team to solve AR/VR inclusion'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
              <img src={people} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
              <Typography variant="body2" color="text.primary" sx={{ fontSize: '16px', fontWeight: 400 }}>{'12 Enrolled'}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 400 }}>{'4 seats left'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
              <img src={calendar} alt="Company Logo" style={{ maxHeight: '80%', maxWidth: '80%' }} />
              <Typography variant="body2" color="text.primary" sx={{ fontSize: '16px', fontWeight: 400 }}>{'12 March 2020'}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 400 }}>{'2 Weeks left'}</Typography>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '16px', fontWeight: 600 , mt: '10px'}}>{'Program highlights'}</Typography>
          {programHeilights.map((highlight, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src={starTwo} alt="bullet icon" style={{ width: 16, height: 16 }} />
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ fontSize: '16px', fontWeight: 400 }}
              >
                {highlight}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default SelectedProgram;