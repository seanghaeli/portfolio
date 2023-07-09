import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: '0 0 0 1px #ccc',
}));

const ProjectItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  width: '15vw',
  height: '15vw',
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

const Title = styled(Typography)(({ theme }) => ({
  mt: 2,
  fontWeight: 'bold',
  width: '90%', // Limit the width of the title container
  margin: '0 auto', // Center the title horizontally
  fontSize: '1vw', 
}));

function Projects() {
  const engineeringProjects = [
    {
      title: 'Reinforcement Learning Wheel',
      imageSrc: 'rlwheel.png',
      link: 'rlwheel',
    },
    {
      title: 'Quantum Devices Engineering',
      imageSrc: 'quantumdevices-fridge.png',
      link: 'quantumdevices',
    },
    // Add more engineering projects as needed
  ];

  const academicProjects = [
    {
      title: 'Papers',
      imageSrc: 'isingmodel.png',
      link: 'papers',
    },
    {
      title: 'Project 7',
      imageSrc: 'project6.png',
      link: '...',
    },
    // Add more academic projects as needed
  ];

  const responsive = {
    bigdesktop: {
      breakpoint: { max: 3840, min: 2560 }, // Update the max and min values to match the desired resolution for 4K screens
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2560, min: 1023 }, // Update the max and min values to match the desired resolution for 4K screens
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 1023, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2, fontSize: '2vw' }}>
        Engineering, Software
      </Typography>
      <Carousel
        responsive={responsive}
        partialVisible
        ssr
        infinite
        autoPlay={false}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {engineeringProjects.map((project, index) => (
          <ProjectItemWrapper key={index}>
            <ProjectItem>
              <Link to={project.link}>
                <ImageContainer>
                  <Image src={process.env.PUBLIC_URL + '/' + project.imageSrc} alt={project.title} />
                </ImageContainer>
              </Link>
              <Title variant="subtitle1" component="h3">
                {project.title}
              </Title>
            </ProjectItem>
          </ProjectItemWrapper>
        ))}
      </Carousel>

      <Typography variant="h4" component="h2" sx={{ marginBottom: 2, marginTop: 4, fontSize: '2vw'}}>
        Academic
      </Typography>
      <Carousel
        responsive={responsive}
        partialVisible
        ssr
        infinite
        autoPlay={false}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {academicProjects.map((project, index) => (
          <ProjectItemWrapper key={index}>
            <ProjectItem>
              <Link to={project.link}>
                <ImageContainer>
                  <Image src={process.env.PUBLIC_URL + '/' + project.imageSrc} alt={project.title} />
                </ImageContainer>
              </Link>
              <Title variant="subtitle1" component="h3">
                {project.title}
              </Title>
            </ProjectItem>
          </ProjectItemWrapper>
        ))}
      </Carousel>
    </Box>
  );
}

export default Projects;
