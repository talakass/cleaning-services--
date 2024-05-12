// import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CheckOut.css';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  CreditCard as CreditCardIcon,
  AccountCircle as AccountCircleIcon,
  Email as EmailIcon,
  Home as HomeIcon,
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
    maxWidth: 600,
    margin: '0 auto',
    marginTop: 30,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  textField: {
    backgroundColor: '#F2F2F2',
    borderRadius: 9,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  button: {
    backgroundColor: '#363636',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: 11,
    boxShadow: '0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000',
    transition: 'all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1)',
    '&:hover': {
      boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a',
    },
  },
  input: {
    outline: 'none',

  },
}));

const CheckoutPage = () => {
  const name = localStorage.getItem("name") ? localStorage.getItem("name").slice(1, -1) : "";
  const email = localStorage.getItem("email") ? localStorage.getItem("email").slice(1, -1) : "";
  const address = localStorage.getItem("address") ? localStorage.getItem("address").slice(1, -1) : "";
const navigate= useNavigate()
  const classes = useStyles();

const final=()=>{
 const tala= window.confirm("Submitted! Click OK to navigate back.")
 if (tala){
navigate("/")
 }
}

  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="filled"
                value={name}
                className={classes.textField}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <AccountCircleIcon className={classes.icon} />
                  ),
                  classes: { input: classes.input }, // Add this line
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="filled"
                value={email}
                className={classes.textField}
                fullWidth
                InputProps={{
                  startAdornment: <EmailIcon className={classes.icon} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="filled"
                value={address}
                className={classes.textField}
                fullWidth
                InputProps={{
                  startAdornment: <HomeIcon className={classes.icon} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                variant="filled"
                className={classes.textField}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <CreditCardIcon className={classes.icon} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Expiration Date"
                variant="filled"
                className={classes.textField}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                variant="filled"
                className={classes.textField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Save payment information"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            fullWidth
            onClick={final}
          >
            pay
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;