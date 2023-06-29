import React from 'react';
import { Typography, Grid, CardMedia, Box } from '@mui/material';
import ProjectPage from './ProjectPage';

const QuantumDevices = () => {
    const project = {
        title: 'Quantum Devices Engineering',
        subtitle: 'Exploring Single-Electron Tunneling',
        picture: 'quantumdevices-jfolk.png',
        sections: [
            {
                title: 'Objective',
                content: (
                    <>
                        <div style={{ margin: '1rem' }}></div>
                        <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'center' }}>
                            To develop and analyze high-precision, high-speed devices for capturing single-electron tunneling events.
                        </Typography>
                        <div style={{ margin: '1rem' }}></div>
                    </>
                ),
            },
            {
                title: 'Motivation',
                content: (
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" align="left" paragraph>
                                Single-electron tunneling devices are promising candidates for qubit implementations and underpin various other technologies. Characterizing single electron tunneling events through our experiment provides a robust platform for analyzing these devices. This analysis contributes to a deeper understanding of these devices and their potential applications in quantum computing and beyond.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image="quantumdevices-fridge.png"
                                    alt="Cryogenic fridge at UBC"
                                    style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                                />
                            </div>
                            <Typography
                                variant="subtitle2"
                                component="p"
                                style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}
                            >
                                Figure 1: Cryogenic fridge at UBC, in which our experiment operates.
                            </Typography>
                        </Grid>
                    </Grid>

                ),
            },
            {
                title: 'System',
                content: (
                    <div>
                        <div style={{ margin: '1rem' }}></div>
                        <Typography variant="body1" align="left" paragraph>
                            Single electron tunneling events involve tiny fluctuations in charge, requiring highly sensitive measurement techniques. To detect and analyze these events, we employ an amplification circuit that plays a critical role in enhancing the signal of interest.
                        </Typography>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Box mb={2} textAlign="center">
                                    <img
                                        src="quantumdevices-systemdiagram.jpg"
                                        alt="System Diagram"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                        align="left"
                                        style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'rgba(0, 0, 0, 0.8)' }}
                                    >
                                        Figure 2: The single electron tunneling device is what we're interested in studying. The amplifier circuit boosts the portion of the signal we care about. The analog-to-digital converter transforms the signal into computer-readable form for further analysis.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" align="left" paragraph>
                            The amplification circuit incorporates high-electron mobility transistors (HEMTs), which facilitate efficient electron travel along the conducting channel. HEMTs utilize a heterojunction design and a modulation-doped structure to minimize scattering and impurity effects, allowing electrons to move with minimal resistance. This enables HEMTs to achieve high electron mobility and low-noise signal amplification, making them ideal for enhancing the weak signals of single electron tunneling events.
                        </Typography>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    image="quantumdevices-spicesims.png"
                                    alt="Amplifier Circuit Design Verification"
                                    style={{ height: '100%', objectFit: 'contain' }}
                                />
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
                                >
                                    Figure 3: Amplification circuit design verification using SPICE (electronic simulation tool) to model our design at ultralow temperatures (4 kelvin)
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" align="left" paragraph>
                                    In our design of the amplifier circuit, we were seeking to maximize signal gain and minimize power consumption. The latter is important to maintain the low temperature environment.
                                </Typography>
                                <Typography variant="body1" align="left" paragraph>
                                    Figure 3 demonstrates two configurations of circuit parameters, in which the right side has slightly higher gain.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" align="left" paragraph>
                                    The final design was then assembled into a PCB using Altium. Initial tests on the actualized PCB revealed that it did not act as a stable amplifier in enough of the operating bands that we wanted. This led us to a second iteration of the PCB.
                                </Typography>
                                <Typography variant="body1" align="left" paragraph>
                                    The second iteration incorporates better bypass capacitance, and is compactified to reduce track length which minimizes parasitic inductance and capacitance, in turn improving stability.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ marginRight: '1rem', textAlign: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image="quantumdevices-pcbv1.PNG"
                                            alt="First iteration of PCB"
                                            style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            image="quantumdevices-pcbv2.PNG"
                                            alt="Second iteration of PCB"
                                            style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
                                >
                                    Figure 4: First and second iteration of our amplification PCB.
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        image="quantumdevices-adc.jpg"
                                        alt="Analog to digital converter hardware"
                                        style={{ maxWidth: '100%', maxheight: '50vh', objectFit: 'contain' }}
                                    />
                                </div>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}
                                >
                                    Figure 5: High-speed analog to digital converter
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" align="left" paragraph>
                                    The signals we are looking to measure are relatively small in amplitude, even after amplification, and it was determined that an 18-bit analog-to-digital converter (ADC) would be needed. The timescale of the tunneling events necessitated an ADC with a 15 Million Hz sample rate.
                                </Typography>
                                <Typography variant="body1" align="left" paragraph>
                                    With no off-the-shelf ADC with these specifications available, we sourced parts and built our own. Figure 5 includes driver boards, clocks, data acquisition boards, and the ADC itself.
                                </Typography>
                                <Typography variant="body1" align="left" paragraph>
                                    With this ADC, we're equipped the read the signal coming out of the amplifier board and further analyse it.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" align="left" paragraph>
                                    One example of tests that we ran was in sweeping across various operating conditions such as bias voltages, and input wave amplitudes and frequency. This allowed us to determine stable ranges of the amplifier circuit.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        image="quantumdevices-adcfft.webp"
                                        alt="Amplifier Circuit Design Verification"
                                        style={{ maxWidth: '100%', maxheight: '50vh', objectFit: 'contain' }}
                                    />
                                </div>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}
                                >
                                    Figure 6: Plot of normalized FFT amplitude of amplifier circuit output sweeping across bias voltages. Blue is small magnitude, yellow is big.
                                </Typography>
                            </Grid>
                        </Grid>
                        <div style={{ margin: '1rem' }}></div>
                        <Typography variant="body1" align="left" paragraph>
                            In the end, due to lack of graduate students, it was determined to be unlikely to convert this research into a meaningful paper in under two years, and so the project was dropped. While the hardware (low-noise amplifier and high-speed ADC) that I built is still in usage for other projects, it was at this point that I split ways with the lab.
                        </Typography>
                    </div>
                ),
            },
        ],
    };
    return <ProjectPage project={project} />;
};

export default QuantumDevices;
