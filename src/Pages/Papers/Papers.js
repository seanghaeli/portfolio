// Papers.js
import React from 'react';
import { Typography, Box, CardMedia, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const papers = [
  {
    title: 'Problem of Quickest Ascent',
    thumbnail: 'quickestascent.png',
    link: '/quickestascent.pdf',
  },
  {
    title: 'Investigations of the Ising Model in 2D and 3D',
    thumbnail: 'isingmodel.png',
    link: '/isingmodel.pdf',
  },
  {
    title: 'Exploring the Fermi Paradox Using Anthropic Reasoning',
    thumbnail: 'cmb.png',
    link: '/fermiparadox.pdf',
  },
];

const Papers = () => {
  return (
    <Box
      sx={{
        m: 3,
        backgroundColor: '#FFFFFF',
        width: '100%',
        justifyContent: 'center',
        flexGrow: 1,
        margin: 0,
        padding: '1%',
        height: '100%',
      }}
      className="fade-in"
    >
      {papers.map((paper, index) => (
        <Link
          key={index}
          component={RouterLink}
          to={paper.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '20px 10%',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontSize: {
                  xs: '2vw',
                  sm: '2vw',
                  md: '2vw',
                  lg: '2vw',
                  xl: '1.5vw',
                },
              }}
            >
              {paper.title}
            </Typography>
          </Box>
          <Box sx={{ width: '20vh', height: '20vh', marginLeft: '20px' }}>
            <CardMedia
              component="img"
              image={paper.thumbnail}
              alt={paper.title}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Papers;
