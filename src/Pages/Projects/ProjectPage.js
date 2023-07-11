import React from 'react';
import { Container, Typography, Box, CardMedia, Grid } from '@mui/material';

const ProjectPage = ({ project }) => {
  const { title, subtitle, picture, sections } = project;

  const titleStyle = {
    fontSize: 'calc(1.5rem + 1vw)',
    textAlign: 'center',
  };

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
              <Typography variant="h3" component="h1" style={titleStyle}>
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="h6"
                  component="h2"
                  align="center"
                  color="text.secondary"
                  style={{ fontSize: '1.5rem' }} // Adjust as needed
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
              <Typography variant="h4" component="h2" align="center">
                {section.title}
              </Typography>
              <Box textAlign="center">
                {section.content}
              </Box>
            </React.Fragment>
          ))}

        </Box>
      </Container>
    </Box>
  );
};

export default ProjectPage;
