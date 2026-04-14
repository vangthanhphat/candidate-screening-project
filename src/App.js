import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          My Shopping List
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Dự án đầu tay của mình!
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;