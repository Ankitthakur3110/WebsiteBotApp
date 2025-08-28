import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const EnrollmentForm = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    linkedin: '',
    github: '',
  });

  // Handle drag & drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
  const { firstName, lastName, email, number, linkedin } = form;
  return firstName && lastName && email && number && linkedin;
};

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form);
    console.log('Uploaded resume:', resume);
    // Here you can send data to API
  };

  return (
    <Box 
      sx={{ 
        maxWidth: 600, 
        mx: 'auto', 
        p: 3, 
        border: '1px solid #ddd', 
        borderRadius: 3, 
        boxShadow: 3 
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Fill the form to enroll
      </Typography>

      {/* Drag & Drop Resume */}
      <Paper
        elevation={2}
        sx={{
          border: '2px dashed #aaa',
          p: 3,
          mb: 3,
          textAlign: 'center',
          cursor: 'pointer',
          bgcolor: resume ? '#e3f2fd' : 'transparent'
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('resumeInput')?.click()}
      >
        <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} color="primary" />
        <Typography>
          {resume ? resume.name : 'Drag & drop your resume here or click to upload'}
        </Typography>
        <input
          id="resumeInput"
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={(e) => e.target.files && setResume(e.target.files[0])}
        />
      </Paper>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </Box>

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Number"
          name="number"
          type="tel"
          value={form.number}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="LinkedIn"
          name="linkedin"
          type="url"
          value={form.linkedin}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="GitHub (Optional)"
          name="github"
          type="url"
          value={form.github}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isFormValid()}
          sx={{ py: 1.5, fontWeight: 600 }}
        >
          Enroll Me!
        </Button>
      </form>
    </Box>
  );
};

export default EnrollmentForm;
