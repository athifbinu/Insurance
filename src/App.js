import React from 'react';
import Header from "./components/Header/Header"
import LeftHeder from './components/LeftHeader/LeftHeder';
import Home from "./components/Home/Home"
import Quatation from './components/Quatation/quatation';
const App = () => {
  return (
    <div>
    <Header/>
    <div className="flex">
        <LeftHeder/>
         <Home/>
    </div>
    </div>
  );
}

export default App;
