import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div>
      <Header></Header>
      <Shop ></Shop>
    </div>
  );
}

export default App;
