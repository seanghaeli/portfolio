import React from 'react';
import { Grid, Typography, Box, CardMedia, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const videos = [
    {
        title: 'Physics of Rainbows',
        thumbnail: 'videos-rainbow.png',
        link: 'https://www.youtube.com/watch?v=g7rV8b0Tb2k&list=PLjYAr6I4xGWyMt2disjClb3SARbW1Tb17&ab_channel=SeanGhaeli',
    },
    {
        title: 'Polarization of Light',
        thumbnail: 'videos-beamsplitter.png',
        link: 'https://www.youtube.com/watch?v=5cx9ng1mEuQ&list=PLjYAr6I4xGWyzbKEhPFj9G43Rf76V_-Ml&ab_channel=SeanGhaeli',
    },
    {
        title: 'Hawking Radiation and Blackhole Evaporation',
        thumbnail: 'videos-feynmandiagram.png',
        link: 'https://www.youtube.com/watch?v=FTWiU2AF-PI&list=PLjYAr6I4xGWyirLlgZNxr0aPPstQszlpY&ab_channel=SeanGhaeli',
    },
    {
        title: 'Double Slit Experiment',
        thumbnail: 'videos-diffraction.png',
        link: 'https://www.youtube.com/watch?v=PBhphDdoLoA&list=PLjYAr6I4xGWz9aP9my0zO4la6ykFkB1eW&ab_channel=SeanGhaeli'
    },
    {
        title: 'Snell\'s Law (No Calulus)',
        thumbnail: 'videos-snell.png',
        link: 'https://www.youtube.com/watch?v=Y9dvAVyZWYg&list=PLjYAr6I4xGWzgnIn1XwrgfrSmkXdrLPqr&ab_channel=SeanGhaeli'
    },
    {
        title: 'Euler\'s Number As A Limit',
        thumbnail: 'videos-eulersnum.jpg',
        link: 'https://www.youtube.com/watch?v=Gl9mnKE3KU8&list=PLjYAr6I4xGWy4a38vTgDJSzt_jAcOe5Eb&ab_channel=SeanGhaeli'
    },
    {
        title: 'Gamma Function',
        thumbnail: 'videos-factorial.png',
        link: 'https://www.youtube.com/watch?v=tJF15e5Yx8M&list=PLjYAr6I4xGWxG1Z2r5Eyd3Kbb_KCxoDIj&ab_channel=SeanGhaeli'
    },
    {
        title: 'Euler\'s Formula And Some Implications',
        thumbnail: 'videos-eulersformula.png',
        link: 'https://www.youtube.com/watch?v=gN6KsKUJg_8&list=PLjYAr6I4xGWzVYSNOZUDigqcdMhSyXjUr&ab_channel=SeanGhaeli'
    },
    // Add more videos here...
];

const Videos = () => {
    return (
        <Box
            sx={{
                m: 3,
                backgroundColor: '#FFFFFF',
                width: '100%',
                justifyContent: 'center',
                flexGrow: 1,
                margin: 0,
                padding: '5% 10%',
                minHeight: '90vh',
            }}
            className="fade-in"
        >
            <Grid container justifyContent="left">
                {videos.map((video, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} justifyContent="center" sx={{padding: '1%'}}>
                        <Link
                            target="_blank"
                            component={RouterLink}
                            to={video.link}
                            style={{ textDecoration: 'none' }}
                        >
                            <Box sx={{ width: '100%', height: '30vh' }}>
                                <CardMedia
                                    component="img"
                                    image={video.thumbnail}
                                    alt={video.title}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    align="center"
                                    sx={{
                                        fontWeight: 'bold', 
                                        fontSize: {
                                            xs: '2.5vw',
                                            sm: '2.5vw',
                                            md: '2vw',
                                            lg: '1.5vw',
                                            xl: '1.5vw',
                                        },
                                    }}
                                >
                                    {video.title}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Videos;
