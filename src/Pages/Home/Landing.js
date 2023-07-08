import React from 'react';
import { Typography, Box, Avatar, useMediaQuery, IconButton, Link } from '@mui/material';
import { styled } from '@mui/system';

const CenteredBox = styled(Box)({
  textAlign: 'center',
});

const StyledIconButton = styled(IconButton)({
  width: '3vw',
  height: '3vw',
  margin: '0 1vw',
});

function Landing() {
  const isPhoneScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: isPhoneScreen ? 'column' : 'row',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <CenteredBox sx={{ flexGrow: 1, marginRight: isPhoneScreen ? 0 : 2, marginBottom: isPhoneScreen ? 2 : 0 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '3.5vw',
              sm: '4vw',
              md: '3vw',
              lg: '4vw',
            },
          }}
        >
          Sean Ghaeli
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          gutterBottom
          sx={{
            fontSize: {
              xs: '2vw',
              sm: '2vw',
              md: '2vw',
              lg: '2vw',
            },
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          Passionate About Machine Learning and Robotics
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <StyledIconButton
            component={Link}
            href="https://www.linkedin.com/in/seanghaeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt="LinkedIn" style={{ width: '100%' }} />
          </StyledIconButton>
          <StyledIconButton
            component={Link}
            href="https://github.com/seanghaeli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + '/github-icon.png'} alt="GitHub" style={{ width: '100%' }} />
          </StyledIconButton>
          <StyledIconButton
            component={Link}
            href="mailto:seanghaeli@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + '/email-icon.png'} alt="Email" style={{ width: '100%' }} />
          </StyledIconButton>
          <StyledIconButton
            component={Link}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={process.env.PUBLIC_URL + '/resume-icon.png'} alt="Resume" style={{ width: '100%' }} />
          </StyledIconButton>
        </Box>
      </CenteredBox>
      {isPhoneScreen && (
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Avatar
            alt="Your Name"
            src={process.env.PUBLIC_URL + '/headshot.png'}
            variant="square"
            sx={{
              width: '30vw',
              height: 'auto',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          />

        </Box>
      )}
      {!isPhoneScreen && (
        <Box sx={{ width: '30vw', height: 'auto', margin: '0 auto', maxWidth: '100%' }}>
          <Avatar
            alt="Your Name"
            src={process.env.PUBLIC_URL + '/headshot.png'}
            variant="square"
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>

      )}
    </Box>
  );
}

export default Landing;