import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';


const theme = createTheme({
  palette: {
    primary: {
      main: '#004aad',
    },
    secondary: {
      main: '#f06292',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Navbar />
        </Container>
        <Container maxWidth="xl">
          <Hero />
        </Container>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;