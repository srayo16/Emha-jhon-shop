import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Imventotry/Inventory';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import React, { useState } from 'react';
import Shipping from './Components/Shipping/Shipping';

function App() {
  


  return (
    <div>
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/shipping' element={
          <RequireAuth>
            <Shipping></Shipping>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
