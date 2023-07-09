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
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '20px', // Add desired padding here
                paddingLeft: '30vh',
                paddingRight: '30vh'
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
                    style={{ textDecoration: 'none', marginBottom: '20px', display: 'flex', alignItems: 'center' }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="h2">
                            {paper.title}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '200px', height: '200px', marginLeft: '20px' }}>
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
