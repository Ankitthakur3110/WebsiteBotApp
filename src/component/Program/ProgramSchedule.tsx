import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const cardData = [
  { title: 'Week 1', description: 'Talent shortage is real, build distributed team to transform.' },
  { title: 'Week 2', description: 'Win challenges as part of world class teams with placement' },
  { title: 'Week 3', description: 'Win challenges as part of world class teams with placement' },
  { title: 'Week 4', description: 'Win challenges as part of world class teams with placement' }
];

const fullDetails = [
  {
    week: 'Week 1',
    points: [
      'Understand Blockchain, Decentralisation, Distributed, Consensus & Distributed Ledger.',
      'Understand why people don’t use it to buy stuff and why bitcoin price never becomes 0.',
      'Figure out The “Correct” Price of Bitcoin.',
      'Learn what moves Bitcoin prices up and down.',
      'Learn nuances and processes of Mining.',
      'Understand Crash vs Correction, Halving & 51% attack in crypto.',
      'Understand legalities, illegalities, and tax implications.'
    ]
  },
  { week: 'Week 2', points: ['This is week 2 details...', 'More info here...'] },
  { week: 'Week 3', points: ['This is week 3 details...', 'More info here...'] },
  { week: 'Week 4', points: ['This is week 4 details...', 'More info here...'] }
];

const ProgramSchedule = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileToggle = (index: number) => {
    if (activeWeek === index) setActiveWeek(-1); // collapse if already open
    else setActiveWeek(index);
  };

  return (
    <Box sx={{ backgroundColor: '#FDF8F4', borderRadius: '16px', width: '100%', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Typography sx={{ fontSize: { xs: '18px', md: '24px', lg: '32px' }, lineHeight: '48px', fontWeight: 800, marginY: '32px' }}>
        Program schedule
      </Typography>

      {/* Week cards */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, width: '100%' }}>
        {/* LEFT: Small week cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: '1 0 12px' }}>
          {cardData.map((item, index) => {
            const isActive = activeWeek === index;
            return (
              <Box key={index}>
                <Box
                  onClick={() => isMobile && handleMobileToggle(index)}
                  onMouseEnter={() => !isMobile && setActiveWeek(index)}
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    borderRadius: 2,
                    padding: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    border: '1px solid #D7D7D7'
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: isActive ? '#0053E2' : '#3C404B', fontSize: { xs: '16px', md: '20px' }, fontWeight: 700, lineHeight: '32px' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400, lineHeight: '28px' }}>
                      {item.description}
                    </Typography>
                  </Box>

                  {isMobile ? (isActive && <ArrowUpwardIcon sx={{ color: 'blue', width : '25px' , height : '20px' }}/>) : (isActive && <ArrowForwardIcon sx={{ color: 'blue' }} />)}
                </Box>

                {/* MOBILE: show details below clicked card */}
                {isMobile && isActive && (
                  <Box sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, p: 2, mt: 1 }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '32px' }} mb={2}>
                      {`What you will do on ${fullDetails[index].week}`}
                    </Typography>

                    {fullDetails[index].points.map((point, i) => (
                      <Typography key={i} variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, fontSize: '12px', fontWeight: 400, lineHeight: '28px' }}>
                        <Box component="span" sx={{ display: 'inline-block', width: 6, height: 6, bgcolor: 'black', borderRadius: '50%', mr: 1, mt: '12px' }} />
                        {point}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        {/* RIGHT: Big detail box (desktop only) */}
        {!isMobile && activeWeek >= 0 && (
          <Box sx={{ backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, p: 1.5, flex: 1, minHeight: '300px', transition: 'all 0.3s ease' }}>
            <Box sx={{ backgroundColor: '#FDF8F4', borderRadius: 2, p: 3, minHeight: '300px' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: '700', lineHeight: '32px' }} mb={2}>
                {`What you will do on ${fullDetails[activeWeek].week}`}
              </Typography>

              {fullDetails[activeWeek].points.map((point, i) => (
                <Typography key={i} variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, fontSize: '16px', fontWeight: 400, lineHeight: '28px' }}>
                  <Box component="span" sx={{ display: 'inline-block', width: 6, height: 6, bgcolor: 'black', borderRadius: '50%', mr: 1, mt: '12px' }} />
                  {point}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      <Button variant="contained" sx={{ backgroundColor: '#0053E2', my: '32px' }}>
        Enroll now
      </Button>
    </Box>
  );
};

export default ProgramSchedule;
