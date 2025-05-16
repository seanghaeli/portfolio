import React from 'react';
import { Typography, Grid, CardMedia, Box, Link, List, ListItem, IconButton, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ProjectPage from './ProjectPage';

const StyledIconButton = styled(IconButton)({
  width: '3vw',
  height: '3vw',
  margin: '0 1vw',
});

const RCL = () => {
  const isPhoneScreen = useMediaQuery('(max-width:600px)');

  const project = {
    title: 'Tabular Transformer for Cardiology',
    subtitle: 'AI Solutions for Real-Time Ultrasound Data Processing',
    picture: 'rcl-echocardiography.png',
    sections: [
      {
        title: 'Objective',
        content: (
          <>
            <div style={{ margin: '1rem' }}></div>
            <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'center', fontSize: 'inherit' }}>
              Input heart ultrasounds to AI models to automatically generate physician reports.
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
                  In the practice of cardiology, sonographers engage with a continuous stream of intricate data during real-time patient assessments. These evaluations, while pivotal, are intricate and can be time-intensive. The inherent strength of AI lies in its ability to discern relationships between clinical measurements that might elude manual evaluations, generating nuanced insights and comprehensive reports on-the-fly.
                  <br /><br />
                  By serving as an advanced assistant, AI introduces capabilities to the sonography process that can revolutionize its depth and efficiency, fostering a new standard in patient care.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image="rcl-heartmesh.png"
                  alt="Everyday Robotics Grasping Robot Sim + Real Training Results"
                  style={{ height: '100%', objectFit: 'contain' }}
                />
              </div>
            </Grid>
          </Grid>
        ),
      },
      {
        title: 'AI System',
        content: (
          <>
            <div style={{ margin: '1rem' }}></div>
            <StyledIconButton
              component={Link}
              href="https://github.com/seanghaeli/MaskedTabTransformerTF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + '/github-icon.png'}
                alt="GitHub"
                style={{ width: isPhoneScreen ? '5vw' : '2.5vw' }} 
              />
            </StyledIconButton>
            <div style={{ margin: '1rem' }}></div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="rcl-dataset.png"
                  alt="Amplifier Circuit Design Verification"
                  style={{ height: '100%', objectFit: 'contain' }}
                />
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: '3.5vw',
                      sm: '1vw'
                    },
                    marginTop: '0.5rem'
                  }}
                >
                  Figure 1: An entry from the semi-structured echocardiography dataset
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
                  In collaboration with <Link href="https://aiechocorelab.ca/" target="_blank" rel="noopener noreferrer">VGH AI Echo Core Lab</Link>, we received a semi-structured cardiology dataset. Initial attempts using Language Model Models (LLMs) for data extraction lacked accuracy, and existing medical terminology databases didn't align well with our specific data. Recognizing these challenges, we developed our own tailored <Link href="https://docs.google.com/spreadsheets/d/1O2gzczP7tUSCxqxMp8gg2Gmf5PjfdLBF/edit?usp=sharing&ouid=114503740266765363696&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">hierarchical medical term tree</Link> for cardiology measurements. Using regular expressions, we crafted a <Link href="https://pastebin.com/qW99Meqa" target="_blank" rel="noopener noreferrer">script</Link> to scan the dataset with reference to our hierarchy, successfully converting it into a structured tabular format.
                </Typography>
              </Grid>
            </Grid>
            <div style={{ margin: '1rem' }}></div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
                  In tabular data processing, gradient boosting methods often excel. However, our project necessitated a deeper, more semantic understanding of the data, while also preparing for eventual integration with echocardiography video models. These other modes, intrinsic to our project, are anticipated to be integrated via cross attention in subsequent stages. This multi-modal objective steered us towards <Link href="https://towardsdatascience.com/transformers-for-tabular-data-part-3-piecewise-linear-periodic-encodings-1fc49c4bd7bc" target="_blank" rel="noopener noreferrer">FTTransformer</Link>, valued for its ability to work with numerical and categorical embeddings and to deeply interpret data's intrinsic meanings.
                  <br /><br />
                  Establishing this baseline enabled us to identify and group closely correlated features. By excluding these groups during training, we ensured the model fostered more intricate relationships between variables, preventing it from merely replicating obvious patterns.
                  <br /><br />
                  However, FTTransformer's regression-centric design posed a challenge. Our aim wasn’t just regression; as real-time data provides a snapshot of table measurements, we needed the model to estimate the missing values intelligently. This aspiration pushed us toward a model pretrained using masked reconstruction, ensuring dynamic and comprehensive measurement estimation.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ marginRight: '1rem', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    image="rcl-fttransformerperformance.png"
                    alt="First iteration of PCB"
                    style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                  />
                </div>
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: '2.5vw',
                      sm: '1vw'
                    },
                    marginTop: '0.5rem'
                  }}
                >
                  Figure 2: Performance of regression with FTTransformer with various features as target. Compares performance when dropping highly correlated features.
                </Typography>
              </Grid>
            </Grid>
            <div style={{ margin: '1rem' }}></div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="rcl-tabnetperformance.png"
                  alt="Amplifier Circuit Design Verification"
                  style={{ height: '100%', objectFit: 'contain' }}
                />
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: '2.5vw',
                      sm: '1vw'
                    },
                    marginTop: '0.5rem'
                  }}
                >
                  Figure 3: Performance comparison between TabNet and ensemble methods.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
                  TabNet's masked pretraining architecture aligned with our desired downstream task: accurately estimating missing measurements as real-time data provides table snapshots. However, we encountered a hurdle. TabNet directly fed numerical features into the transformer without the benefit of embeddings. This design choice stripped away essential nuances in our data representation. Thus, even with the task alignment that TabNet provided, our performance suffered significantly.
                </Typography>
              </Grid>
            </Grid>
            <div style={{ margin: '1rem' }}></div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box mb={2} textAlign="center">
                  <img
                    src="rcl-maskedarchitecture.png"
                    alt="System Diagram"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    align="center"
                    sx={{
                      fontSize: {
                        xs: '2.5vw',
                        sm: '1vw'
                      },
                      marginTop: '0.5rem'
                    }}
                  >
                    Figure 4: Architecture of MaskedFTTransformer
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
              Recognizing the limitations of other methods, we revisited FTTransformer, but with an innovative twist: implementing masked training tailored for tabular reconstruction. Our approach was to randomly mask portions of the input sequence and then challenge the model to reproduce the original input during training. A key aspect of this process was our loss function: employing mean square error, it essentially evaluated to zero whenever the model's reconstructed output matched the original input.
              <br /><br />
              To facilitate this unique training procedure, we crafted a custom training loop in TensorFlow, utilizing GradientTape for dynamic differentiation. Additionally, a specially designed dense output layer was introduced to map the embeddings back into our feature space, bridging the gap between the model's internal representations and the actual measurements.
              <br /><br />
              <b>The source code is in the <Link href="https://github.com/seanghaeli/MaskedTabTransformerTF/tree/dev" target="_blank" rel="noopener noreferrer">MaskedFTTransformer</Link> repository.</b>
              <br /><br />
              With these modifications, our model achieved a remarkable R-squared score of 0.96 on our dataset, showcasing its efficacy in predicting the masked values.
            </Typography>
          </>
        ),
      },
      {
        title: 'Cloud Application',
        content: (
          <>
            <div style={{ margin: '1rem' }}></div>
            <StyledIconButton
              component={Link}
              href="https://github.com/seanghaeli/rcl-echo-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + '/github-icon.png'}
                alt="GitHub"
                style={{ width: isPhoneScreen ? '5vw' : '2.5vw' }} 
              />
            </StyledIconButton>
            <div style={{ margin: '1rem' }}></div>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
                  The transformer architecture we've honed is just one piece of our larger unified vision. While our AI model primarily interprets tabular cardiology data, our ambition stretches beyond this. We envisioned a complete solution that caters to both tabular data and echocardiogram videos. Achieving this at scale requires a robust infrastructure, which is why we turned to AWS to build our cloud application: Echo Cloud.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ marginRight: '1rem', textAlign: 'center' }}>
                  <CardMedia
                    component="img"
                    image="rcl-awsarchitecture.png"
                    alt="First iteration of PCB"
                    style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                  />
                </div>
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    fontSize: {
                      xs: '2.5vw',
                      sm: '1vw'
                    },
                    marginTop: '0.5rem'
                  }}
                >
                  Figure 5: AWS Application Architecture
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" align="left" paragraph style={{ fontSize: 'inherit' }}>
              The architecture integrates the following key functionalities:
              <List sx={{ listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}><b>Data Storage:</b> Our echocardiogram data is securely housed in Amazon S3, setting the stage for robust processing capabilities.</ListItem>
                <ListItem sx={{ display: 'list-item' }}><b>Model Deployment:</b> Our containerized AI models are stored in Amazon ECR repositories, guaranteeing flexibility and scalability.</ListItem>
                <ListItem sx={{ display: 'list-item' }}><b>Automatic Validation:</b> With AWS Lambda triggers, we've set up mechanisms for real-time data validation, ensuring consistent data integrity and quality. <Link href="https://github.com/seanghaeli/rcl-echo-cloud/blob/master/backend/lambdas/validation/index.py" target="_blank" rel="noopener noreferrer">Source here</Link>.</ListItem>
                <ListItem sx={{ display: 'list-item' }}><b>Instance Scaling:</b> When there's a need to scale out quickly, using a custom AMI can make the deployment of new instances faster.</ListItem>
                <ListItem sx={{ display: 'list-item' }}><b>Cost-effective Backend Operations:</b> Using EC2 Spot instances, our backend dynamically responds to SQS messages, interfacing with ECR to retrieve the model container, offering a balance between performance and expenditure.</ListItem>
              </List>
              <b>See the source of this cloud solution <Link href="https://github.com/seanghaeli/rcl-echo-cloud" target="_blank" rel="noopener noreferrer">here</Link>.</b>
            </Typography>
          </>
        ),
      }
    ],
    meta:
      <>
          <meta property="og:title" content="Tabular Transformer for Cardiology" />
          <meta property="og:description" content="Implement AI techniques to enhance sonography processes: improving throughput, facilitating real-time view predictions, and generating embeddings that capture measurement relationships, integrated on AWS for timely processing." />
          <meta property="og:image" content="https://seanghaeli.com/rcl-maskedarchitecture.png" />
          <meta property="og:url" content="https://seanghaeli.com/rcl" />
          <meta property="og:type" content="website" />
      </>
  };

  return <ProjectPage project={project} />;
};

export default RCL;
