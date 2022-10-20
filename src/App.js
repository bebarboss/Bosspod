import React from 'react';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Cards from './page/Home/Home';
import CardsDetails from './component/CardsDetails';
import Pod from './page/Pod/Pod';
import Liquid from './page/Liquid/Liquid';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards />}/>
        <Route path='cart' element={<CardsDetails />}/>
        <Route path='pod' element={<Pod />}/>
        <Route path='liquid' element={<Liquid />}/>
      </Routes>
    </>
  );
}

export default App;
