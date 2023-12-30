// NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import './NotFoundPage.css'; // Import the custom CSS file

const NotFoundPage = () => {
  return (
    <Container className="not-found-container">
      <Typography variant="h1" className="not-found-title">
        404
      </Typography>
      <Typography variant="h5" className="not-found-subtitle">
        Page Not Found
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        color="primary"
        className="back-button"
      >
        Go back to Homepage
      </Button>
    </Container>
  );
};

export default NotFoundPage;
