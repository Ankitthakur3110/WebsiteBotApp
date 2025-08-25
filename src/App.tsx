import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BattlegroundPage from './pages/BattlegroundPage';
import ProgramPage from './pages/ProgramPage';

const theme = createTheme({
  palette: {
    primary: { main: '#004aad' },
    secondary: { main: '#f06292' },
  },
  typography: { fontFamily: 'Roboto, sans-serif' },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/battleground" element={<BattlegroundPage />} />
            <Route path="/program" element={<ProgramPage />} />
          </Routes> 
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
