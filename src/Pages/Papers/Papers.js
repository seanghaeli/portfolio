import React from 'react';
import { Container, Typography, Box, CardMedia, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const papers = [
  {
    title: 'Paper 1',
    thumbnail: 'isingmodel.png',
    link: '/quickestascent.pdf',
  },
  {
    title: 'Paper 2',
    thumbnail: 'quantumdevices-adc.jpg',
    link: '/paper2',
  },
  // Add more papers as needed
];

const Papers = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '40px', // Adjust top padding as desired
        paddingBottom: '40px', // Adjust bottom padding as desired
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            borderRadius: '4px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {papers.map((paper, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', marginBottom: '20px' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" component="h2">
                  {paper.title}
                </Typography>
                <Box sx={{ marginLeft: '20px' }}>
                  <CardMedia component="img" height="140" image={paper.thumbnail} alt={paper.title} />
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Papers;
