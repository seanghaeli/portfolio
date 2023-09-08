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

const ImageContainer = styled(Box)(() => ({
  width: '20vw',
  height: '30vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
});

const Title = styled(Typography)(() => ({
  mt: 2,
  width: '90%',
  margin: '0 auto',
}));

const headerTextStyle = {
  fontSize: {
    xs: '6vw',
    sm: '4vw',
    md: '3vw',
    lg: '3vw',
  },
}

function Projects() {
  const engineeringProjects = [
    {
      title: 'Tabular Transformer for Cardiology',
      imageSrc: 'rcl-ultrasound.png',
      link: 'rcl',
    },
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
      title: 'Lectures',
      imageSrc: 'videos-rainbow.png',
      link: 'lectures',
    },
    // Add more academic projects as needed
  ];

  const responsive = {
    bigdesktop: {
      breakpoint: { max: 3840, min: 2560 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2560, min: 1023 },
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
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontSize: headerTextStyle.fontSize }}
      >
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
              <Link
                to={project.link}
                style={{ textDecoration: 'none' }}
              >
                <Title
                  component="h3"
                  variant="inherit" color="black"
                  sx={{
                    fontSize: {
                      xs: '3vw',
                      sm: '2vw',
                      md: '2vw',
                      lg: '1.5vw',
                    },
                  }}
                >
                  {project.title}
                </Title>
              </Link>
            </ProjectItem>
          </ProjectItemWrapper>
        ))}
      </Carousel>

      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: headerTextStyle.fontSize
        }}
      >
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
              <Link
                to={project.link}
                style={{ textDecoration: 'none' }}
              >
                <Title
                  component="h3"
                  variant="inherit" color="black"
                  sx={{
                    fontSize: {
                      xs: '3vw',
                      sm: '2vw',
                      md: '2vw',
                      lg: '1.5vw',
                    },
                  }}
                >
                  {project.title}
                </Title>
              </Link>
            </ProjectItem>
          </ProjectItemWrapper>
        ))}
      </Carousel>
    </Box>
  );
}

export default Projects;
