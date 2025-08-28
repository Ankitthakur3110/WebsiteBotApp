import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card } from '@mui/material';
import group4 from '../../assets/images/group4.svg';
import maskgroup3 from '../../assets/images/maskgroup3.svg';
import { isMobile } from 'react-device-detect';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // stack for mobile
        gap: 3,
        justifyContent: 'center',
        alignItems: 'stretch',
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 12 },
        backgroundColor: "#F3F5F7",
        overflowX: 'hidden'
      }}
    >
      {/* LEFT CARD */}
      <Card
        sx={{
          flex: isMobile ? '1 1 0' : '1 1 0', // full width on mobile
          width: isMobile ? '100%' : 'auto',
          backgroundColor: 'white',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          boxShadow: 3,
          position: 'relative',
          overflow: 'hidden',
          mb: isMobile ? 3 : 0, // spacing between cards on mobile
          minHeight: isMobile ? '70vh' : 'auto',
        }}
      >
        <Typography sx={{ mb: 2, fontSize: { xs: '18px', md: '32px' }, fontWeight: 800, lineHeight: '48px', textAlign: 'center' }}>
          Still have doubts?
        </Typography>
        <Typography sx={{ mb: 2, fontSize: { xs: '14px', md: '16px' }, fontWeight: 400, lineHeight: '28px', textAlign: 'center' }}>
          Ask us and we will revert back to you soon
        </Typography>

        {/* IMAGE CONTAINER */}
        <Box sx={{ position: 'relative', width: '100%', mt: 'auto' }}>
          <Box
            component="img"
            src={maskgroup3}
            alt="Mask Background"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: isMobile ? '200%' : '140%', // make it bigger on mobile
              height: 'auto',
              zIndex: 0
            }}
          />
          <Box
            component="img"
            src={group4}
            alt="Details Image"
            sx={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              zIndex: 1
            }}
          />
        </Box>
      </Card>

      {/* CONTACT FORM CARD */}
      <Card
        sx={{
          flex: isMobile ? '1 1 0' : '1.5 1 0',
          width: isMobile ? '100%' : 'auto',
          minHeight: isMobile ? '70vh' : 'auto',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography sx={{ mb: 1, fontSize : {xs : '16px' , md: '24px'} }}>Send us a message</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
            <TextField
              label="First Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Surname"
              name="surname"
              value={form.surname}
              onChange={handleChange}
              required
              fullWidth
            />
          </Box>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, alignSelf: 'flex-start', backgroundColor: '#0053E2', width: '100%' }}
          >
            Send Message
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ContactSection;
