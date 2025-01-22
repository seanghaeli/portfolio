import React from 'react';
import { Typography, Grid, CardMedia, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProjectPage from './ProjectPage';

const RLWheel = () => {
  const link = 'https://drive.google.com/file/d/1-_E7y8qAGDXrpV4Ew8ip3U27Yok6rNIG/view?usp=sharing'
  const project = {
    title: 'Reinforcement Learning Wheel',
    subtitle: 'Exploring Simulation To Real Transfer For Robotics',
    picture: 'rlwheel-group.jpeg',
    sections: [
      {
        title: 'Objective',
        content: (
          <>
            <div style={{ margin: '1rem' }}></div>
            <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'center', fontSize: 'inherit' }}>
              Develop autonomous platforms for "sim2real" reinforcement learning training.
            </Typography>
            <div style={{ margin: '1rem' }}></div>
          </>
        ),
      },
      {
        title: 'Motivation',
        content: (
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ my: 1 }}>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'left', fontSize: 'inherit' }}>
                  The complexities and inconsistencies of physical systems present challenges for reinforcement learning applications.
                  To bridge this gap, the project endeavors to create self-resetting, autonomous platforms for "sim2real" training,
                  ultimately enhancing the application of simulation-trained models to real-world scenarios.
                </Typography>
                <br />
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'left', fontSize: 'inherit' }}>
                  Sergey Levine makes the case for real world Reinforcement Learning  <RouterLink component={RouterLink} to="https://www.youtube.com/watch?v=Ik1nS2E4ar4&ab_channel=RAIL" target="_blank" rel="noopener noreferrer"> here</RouterLink>.
                </Typography>
                <br />
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'left', fontSize: 'inherit' }}>
                  Our project is motivated by the insights gained from Everyday Robots' experiments (Figure 1), which demonstrated that combining simulation and real-world training yields performance greater than the sum of their individual contributions.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image="everydayrobotics-sim2real.png"
                  alt="Everyday Robotics Grasping Robot Sim + Real Training Results"
                  style={{ height: '100%', objectFit: 'contain' }}
                />
                <Typography
                  variant="subtitle2"
                  component="p"
                  style={{
                    fontSize: {
                      xs: '3.5vw',
                      sm: '1vw'
                    }, 
                    marginTop: '0.5rem', 
                    color: 'rgba(0, 0, 0, 0.8)' }}
                >
                Figure 1: Everyday Robots conducted experiments to train grasping robots using a combination of simulation and real-world data, improving the performance of the robots and informing the development of an optimized controller.
              </Typography>
            </div>
          </Grid>
          </Grid >
        ),
      },
{
  title: 'System',
    content: (
      <>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="rlwheel-system-diagram.png"
              alt="System Diagram"
              style={{ height: '100%', objectFit: 'contain' }}
            />
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%' }}>
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y72VbFgktZc"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 10, left: 0 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image="rlwheel-system.png"
              alt="System objective"
              style={{ height: '100%', objectFit: 'contain' }}
            />
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'left', fontSize: 'inherit' }}>
          Learn more in the full <RouterLink component={RouterLink} to={link} target="_blank" rel="noopener noreferrer"> Technical Report</RouterLink>.
        </Typography>
      </>
    ),
      },
    ],
    meta:
      <>
        <meta property="og:title" content="Reinforcement Learning Wheel Controller" />
        <meta property="og:description" content="Exploring simulation to real transfer for robotics and developing autonomous platforms." />
        <meta property="og:image" content="https://seanghaeli.com/rlwheel-group.jpeg" />
        <meta property="og:url" content="https://www.seanghaeli.com/rlwheel" />
        <meta property="og:type" content="website" />
      </>
  };

return <ProjectPage project={project} />;
};

export default RLWheel;
