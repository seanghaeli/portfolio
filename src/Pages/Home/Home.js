import React from 'react';
import { Helmet } from 'react-helmet';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Element } from 'react-scroll';
import Landing from './Landing';
import Experience from './Experience';
import Projects from '../Projects/Projects';
import '../../App.css';

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    h2: {
      fontSize: '3vw', // Set font size as a percentage of viewport width
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content="Hi, my name is Sean Ghaeli and I am a senior Engineering Physics undergrad student at UBC. I use this portfolio to document my experiences and ideas." />
      </Helmet>
      <Box
        sx={{
          m: 3,
          backgroundColor: '#FFFFFF',
          width: '100%',
          justifyContent: 'center',
          margin: '0',
        }}
        className="fade-in"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} mb={3} sx={{ height: '30%' }}>
            <Element name="intro">
              <Box
                sx={{
                  marginLeft: '10%',
                  marginRight: '10%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Landing />
              </Box>
            </Element>
          </Grid>
          <Grid item xs={12} mb={3}>
            <Element name="experience">
              <Box
                sx={{
                  marginLeft: '10%',
                  marginRight: '10%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    fontSize: {
                      xs: '6vw',
                      sm: '5vw',
                      md: '3vw',
                      lg: '4vw',
                    },
                  }}
                >
                  Professional Experience
                </Typography>
              </Box>
              <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
                <Experience />
              </Box>
            </Element>
          </Grid>
          <Grid item xs={12} mb={3}>
            <Element name="projects">
              <Box
                sx={{
                  marginLeft: '10%',
                  marginRight: '10%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    fontSize: {
                      xs: '6vw',
                      sm: '5vw',
                      md: '3vw',
                      lg: '4vw',
                    },
                  }}>
                  Selected Projects
                </Typography>
              </Box>
              <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
                <Projects />
              </Box>
            </Element>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
