import React from 'react';
import { Box, Grid, Typography, useMediaQuery, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const ExperienceItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: theme.spacing(1),
  height: '100%'
}));

const textSizing = {
  fontSize: {
    xs: '3vw',
    sm: '2.5vw',
    md: '2vw',
    lg: '1vw',
    xl: '1vw',
  },
}

const ImageContainer = styled(Box)(() => ({
  width: '10vw',
  height: '10vh', 
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

function Experience() {
  const isLaptopScreen = useMediaQuery('(min-width: 1024px)');

  const experienceItems = [
    {
      company: 'UBC Robotics and Control Lab',
      imageSrc: 'ubc.png',
      position: 'Machine Learning Researcher',
      duration: 'May 2023 - Aug 2023',
      description: (
        <>
          Developing transformer based models for medical applications. Deploying to {' '}
          <Link href="https://aiechocorelab.ca/" target="_blank" rel="noopener noreferrer">
            Vancouver General Hospital
          </Link>.
        </>
      ),
      link: "https://rcl.ece.ubc.ca/home-page/",
    },
    {
      company: 'Kardium',
      imageSrc: 'kardium.png',
      position: 'Software Systems Engineer',
      duration: 'Sep 2022 - Dec 2022',
      description: (
        <>
          Redesigned software tools for extracting and processing data from clinical trials, optimized for simplicity and bug reduction.
        </>
      ),
      link: "http://www.kardium.com/",
    },
    {
      company: 'Weir Motion Metrics',
      imageSrc: 'motionmetrics.png',
      position: 'Software Engineer',
      duration: 'May 2022 - Aug 2022',
      description: (
        <>
          Deployed records management application, automating customized client profile creation to optimize sales and support.
        </>
      ),
      link: "https://www.motionmetrics.com/"
    },
    {
      company: 'Cascadia Carbon',
      imageSrc: 'cascadiacarbon.png',
      position: 'Software Engineer',
      duration: 'Mar 2021 - Apr 2021',
      description: (
        <>
          Developed sales platform, website, and redesigned iOS app.
        </>
      ),
      link: "https://cascadiacarbon.com/",
    },
    {
      company: 'UBC Quantum Devices Group',
      imageSrc: 'ubc.png',
      position: 'Researcher',
      duration: 'May 2020 - Aug 2020',
      description: (
        <>
          Developed experiments to investigate single-electron tunneling devices. <Link to="/quantumdevices" component={RouterLink}>See more</Link>
        </>
      ),
      link: "https://phas.ubc.ca/~qdev/",
    },
    // Add more experience items as needed
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={isLaptopScreen ? 4 : 2}>
        {experienceItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ flexGrow: 1 }}>
            <ExperienceItem>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                  <Image src={process.env.PUBLIC_URL + '/' + item.imageSrc} alt={item.company} />
                </ImageContainer>
              </Link>
              <Typography variant="subtitle1" component="h3" sx={{ mt: 2, fontWeight: 'bold', flexGrow: 0, ...textSizing }}>
                {item.company}
              </Typography>
              <Typography variant="body2" component="p" sx={{ flexGrow: 0, ...textSizing }}>
                {item.position}
              </Typography>
              <Typography variant="body2" component="p" sx={{ flexGrow: 0, ...textSizing }}>
                {item.duration}
              </Typography>
              <Typography variant="body2" component="p" sx={{ mt: 1, flexGrow: 0, ...textSizing }}>
                {item.description}
              </Typography>
            </ExperienceItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Experience;