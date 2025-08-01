import React from 'react'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const theme = createTheme({

});


const App = () => {
  return (
    <div className={'bg-stone-900 w-screen h-screen flex items-center flex-col justify-start p-4'}>
    <MantineProvider theme={theme}>
      
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      
    </MantineProvider>
    </div>

  )
}

export default App
