import React from 'react'
import Gallary from './components/Gallary';
import Newapp from './Newapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newapp />} />
        <Route path="/gallary" element={<Gallary/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
