import './App.css';
import React, {useState} from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LoadingBar from 'react-top-loading-bar';






export default function App() {
 
    const [progress, setProgress] = useState(0);


 return(
<>
<Router>
    <Navbar />
      <LoadingBar
        height='4px'
        color='#7f00ff'
        progress={progress}
      /> 
      <Routes>
      <Route exact path="/" element={ <Main setProgress = {setProgress}/>}/> 
      <Route exact path="/about" element={<About setProgress = {setProgress} />}/> 
      <Route exact path="/skills" element={<Skills setProgress = {setProgress}/>}/> 
      <Route exact path="/projects" element={<Projects setProgress = {setProgress} />}/> 
      </Routes>  
</Router>
</>
 )
}


