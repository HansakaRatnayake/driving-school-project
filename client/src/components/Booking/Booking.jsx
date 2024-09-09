import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { TextField, Box, Typography, MenuItem, Select, InputLabel, FormControl, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

import imgD from './Assets/d.jpg';
import imgA from './Assets/a.jpg';
import imgC from './Assets/c.jpg';
import imgB from './Assets/b.jpg';
import backgroundImg from './Assets/bg.jpg'; // Add your background image here

const instructors = [
  { name: 'Vinura Nanayakkara', title: 'Trainer', imgSrc: imgD, social: { facebook: '#', linkedin: '#', instagram: '#' } },
  { name: 'Sithmi Iyara', title: 'Trainer', imgSrc: imgA, social: { facebook: 'https://www.facebook.com/sakuni.sakuni.9210256?mibextid=ZbWKwL', linkedin: 'https://www.linkedin.com/in/sithmi-iyara-0b5837265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', instagram: 'https://www.instagram.com/sithmi_iyara?utm_source=qr&igsh=eHBhZnVieTBtbnBn' } },
  { name: 'Inosha Bandara', title: 'Trainer', imgSrc: imgC, social: { facebook: '#', linkedin: '#', instagram: '#' } },
  { name: 'Dulmini Nawanjana', title: 'Trainer', imgSrc: imgB, social: { facebook: '#', linkedin: '#', instagram: '#' } },
];

const Booking = () => {
  const [selectedInstructor, setSelectedInstructor] = React.useState('');
  const handleInstructorChange = (event) => setSelectedInstructor(event.target.value);

  return (
    <div
      className='bg-cover bg-center text-black min-h-screen p-6'
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Date and Time Picker Section */}
      <div className="text-center mb-16">
        <div className="bg-white bg-opacity-70 hover:bg-opacity-200  p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <Typography variant="h6" gutterBottom>
            Select Date & Time
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              sx={{
                maxWidth: 600, // Increased width
                width: '100%',
                margin: '0 auto', // Center align
                padding: 3, // Padding inside the box
                borderRadius: 2, // Rounded corners
                boxShadow: 2, // Shadow for a lifted effect
              }}
            >
              <MobileDateTimePicker
                label="Date & Time"
                defaultValue={dayjs()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    InputLabelProps={{
                      style: { fontWeight: 'bold' },
                    }}
                    InputProps={{
                      style: { fontWeight: 'bold' },
                    }}
                  />
                )}
                ampm={true} // Show AM/PM format
                showTodayButton={true} // Show "Today" button
                disablePast={false} // Allow selection of past dates
              />
            </Box>
          </LocalizationProvider>

          <Typography variant="body1" gutterBottom sx={{ marginTop: 3 }}>
            Please select your preferred coach
          </Typography>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="select-instructor-label">Select Instructor</InputLabel>
            <Select
              labelId="select-instructor-label"
              value={selectedInstructor}
              onChange={handleInstructorChange}
              label="Select Instructor"
            >
              {instructors.map((instructor) => (
                <MenuItem key={instructor.name} value={instructor.name}>
                  <ListItemAvatar>
                    <Avatar src={instructor.imgSrc} />
                  </ListItemAvatar>
                  <ListItemText primary={instructor.name} secondary={instructor.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Booking;
