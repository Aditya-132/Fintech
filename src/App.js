// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';


// Assuming you have a Login component

const App = () => {
  return (
    <>
   <div>
<BrowserRouter>
<Routes>
<Route index element={<Home />} />
<Route path='/home' element={<Home />} />
<Route path='/log' element={<Login />} />
<Route path='/Reg' element={<Register />} />
<Route path='/Board' element={<DashBoard />} />
</Routes>
</BrowserRouter>
</div>
   </>
  );
}

export default App;
