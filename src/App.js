import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {

  return (
    <div>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App;
