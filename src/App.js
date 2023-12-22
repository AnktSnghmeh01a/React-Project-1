import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import React from 'react'
import Header from './components/Header';
import Home from './components/Home';


import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss";
import "./styles/Services.scss";
import "./styles/About.scss";
import "./styles/Contact.scss";
import "./styles/MediaQuery.scss";

const App = () => {
  return (
    <Router>
     <Header/>
     <Routes>

     <Route  path="/" element={<Home/>}/>


     </Routes>


    </Router>
  )
}

export default App
