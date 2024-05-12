import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container, Rating } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ServicesSection = () => {
  const [ratings, setRatings] = useState("");
  const [services, setServices] = useState(null);
  const auth = localStorage.getItem("email")

  useEffect(() => {
    // Fetch data from the backend API when the component mounts

    axios.get('http://localhost:5000/api/cleaningService')
      .then((response) => {
        setServices(response.data);
        setRatings(services.map(() => null))
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);




  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };


  return (<>
    {services ? (
      <section className='service-page' id='Services'>
        <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  {auth?
                  (<Link to={`/Booking/${service._id}`}>
                    <img src={require(`./../images/${service.image}`)} alt={service.title} style={{ width: '100%', height: 'auto' }} />
                  </Link>):(<Link to={"/Signup"}>
                    <img src={require(`./../images/${service.image}`)} alt={service.title} style={{ width: '100%', height: 'auto' }} />
                  </Link>)
                 
                }
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service.price}$
                    </Typography>
                    <Rating
                      name={`rating-${index}`}
                      value={ratings[index]}
                      precision={0.5}
                      onChange={(event, value) => handleRatingChange(index, value)}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    ) : (<p>loading</p>)}
  </>);
};

export default ServicesSection;


