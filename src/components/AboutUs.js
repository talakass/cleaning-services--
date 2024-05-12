import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import abtimg from "../images/abtimg.png";
import "./AboutUs.css";


const AboutUsSection = () => {
  return (
    <section className='about-us' id='About'
      sx={{
        padding: 6,
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.common.white,
        height: '50vh',
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center'
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <img className="about-image" src={abtimg} alt="About Us Image"style={{ width: '90%', height: 'auto',borderRadius:'30px' }} />
              
            
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              We are a professional cleaning services company dedicated to providing exceptional
              cleaning solutions for residential and commercial spaces. With years of experience
              and a team of skilled cleaners, we strive to deliver the highest quality service to
              our clients. We
              pride ourselves on using eco-friendly cleaning products and employing modern
              techniques to ensure a clean and healthy environment for our clients.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutUsSection;