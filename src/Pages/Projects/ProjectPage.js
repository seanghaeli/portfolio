import React from 'react';
import { Container, Typography, Box, CardMedia, Grid } from '@mui/material';

const ProjectPage = ({ project }) => {
  const { title, subtitle, picture, sections } = project;

  const titleStyle = {
    fontSize: {
      xs: '4vw',
      sm: '4vw',
      md: '3vw',
      lg: '2vw',
      xl: '3vw',
    },
    textAlign: 'center'
  }

  const subtextStyle = {
    fontSize: {
      xs: '2.5vw',
      sm: '2.5vw',
      md: '2vw',
      lg: '1.5vw',
      xl: '1.5vw',
    },
    textAlign: 'center'
  }

  return (
    <Box
      sx={{
        m: 3,
        backgroundColor: '#FFFFFF',
        width: '100%',
        margin: 0,
        padding: '20px',
      }}
      className="fade-in"
    >
      <Container maxWidth={false} style={{ width: '90vw', maxWidth: '100%' }}>
        <Box p={3} bgcolor="transparent">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontSize: titleStyle.fontSize,
                  textAlign: titleStyle.textAlign,
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="h6"
                  component="h2"
                  color="text.secondary"
                  sx={{
                    fontSize: subtextStyle.fontSize,
                    textAlign: subtextStyle.textAlign,
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Grid>
            {picture && (
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={picture}
                  alt={title}
                  style={{ height: '100%', objectFit: 'contain' }}
                />
              </Grid>
            )}
          </Grid>

          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{
                  fontSize: titleStyle.fontSize,
                  textAlign: titleStyle.textAlign,
                }}
              >
                {section.title}
              </Typography>
              <Box
                sx={{
                  fontSize: subtextStyle.fontSize,
                  textAlign: subtextStyle.textAlign,
                }}
              >
                {section.content}
              </Box>
            </React.Fragment>
          ))}

        </Box>
      </Container>
    </Box >
  );
};

export default ProjectPage;
