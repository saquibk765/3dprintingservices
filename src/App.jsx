import React from 'react'
import Gallary from './components/Gallary';
import PrintingService from './components/PrintingService';
import Newapp from './Newapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newapp />} />
        <Route path="/customised-products" element={<Gallary/>} />
        <Route path="/printing-service" element={<PrintingService/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
