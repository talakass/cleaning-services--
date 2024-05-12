import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, IconButton } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(6, 0),
    marginTop: theme.spacing(5),
  },
  logo: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  socialLinks: {
    '& > *': {
      marginRight: theme.spacing(1),
      color: theme.palette.common.white,
    },
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    marginBottom: theme.spacing(2),
    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className={classes.logo}>
              Swift<span>Clean</span>
            </Typography>
            <Typography variant="body2" className={classes.description}>
              We provide top-quality cleaning services to keep your space clean and fresh.
            </Typography>
            <div className={classes.socialLinks}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul className={classes.footerLinks}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">
              123 Cleaning Street, City, State, 12345
              <br />
              Phone: +1 123-456-7890
              <br />
              Email: info@swiftclean.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;