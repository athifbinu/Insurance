import React from 'react';
import Header from "./components/Header/Header"
import LeftHeder from './components/LeftHeader/LeftHeder';
import Home from "./components/Home/Home"
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
