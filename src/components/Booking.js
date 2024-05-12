import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
    width: '80%',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '-37px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    marginBottom: theme.spacing(3),
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  formLabel: {
    flex: '0 0 30%',
    marginRight: theme.spacing(2),
    textAlign: 'right',
    color: '#555',
    fontWeight: 'bold',
  },
  formInput: {
    flex: '0 0 70%',
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  },
  submitButton: {
    width: '100%',
  },
}));
const email = localStorage.getItem("email") ? localStorage.getItem("email").slice(1, -1) : "";
function Booking() {
  const { id } = useParams();
  const classes = useStyles();
  const [booking, setBooking] = useState(null);
  const [total, setTotal] = useState(0);
  const [bookingDate, setbookingDate] = useState("")
  const [bookingTime, setbookingTime] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data from the backend API when the component mounts

    axios.get(`http://localhost:5000/api/cleaningService/${id}`)
      .then((response) => {
        setBooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);


  const submit = (event) => {
    event.preventDefault();
    const formData = {
      serviceId: id,
      bookingDate,
      bookingTime,
      totalAmount: total,
    };
    fetch(`http://localhost:5000/api/booking/${email}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        navigate('/CheckOut')
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };



  const handleChangehoure = (event) => {
    setTotal(booking.price * event.target.value)
  };



  return (

    <div className={classes.formContainer}>
      <h1 className={classes.formTitle}>Booking page</h1>
      {booking ? (
        <form >
          <div className={classes.formRow}>
            <div className={classes.formLabel}>
              <label htmlFor="serviceType">Service Type:</label>
            </div>
            <div className={classes.formInput}>
              <TextField

                id="serviceType"

                value={booking.title}
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formLabel}>
              <label htmlFor="date">Date:</label>
            </div>
            <div className={classes.formInput}>
              <TextField
                type="date"
                name="bookingDate"
                id="date"
                placeholder="Select date"
                value={bookingDate}
                onChange={(e) => setbookingDate(e.target.value)}

                required
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formLabel}>
              <label htmlFor="time">Time:</label>
            </div>
            <div className={classes.formInput}>
              <TextField
                type="time"
                name="bookingTime"
                id="time"
                placeholder="Select time"
                value={bookingTime}
                onChange={(e) => setbookingTime(e.target.value)}
                required
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formLabel}>
              <label htmlFor="name">How many hours:</label>
            </div>
            <div className={classes.formInput}>
              <TextField
                type="text"
                name="hours"
                id="hours"
                placeholder="Enter the number of hours"
                onChange={handleChangehoure}
                required
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formLabel}>
              <label htmlFor="email">Total Amount:</label>
            </div>
            <div className={classes.formInput}>
              <TextField
                value={total}
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={submit}
            className={classes.submitButton}
          >
            SUBMIT
          </Button>
        </form>) : (<p>loading</p>)}
    </div>
  );
}

export default Booking;