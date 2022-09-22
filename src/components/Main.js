import React, {useEffect} from 'react'
import Picture from './Picture'
import Resume from './Neeraj patil resume.pdf'
import {Link} from "react-router-dom";


export default function Main(props) {

  props.setProgress(0)
  
  useEffect(() => {
    props.setProgress(100)

    // eslint-disable-next-line
  }, [])

  return (
        <div className="wrapper">
        <div className="cols cols0"> 
        <span className="topline">Hello</span>
        <h1>I'm <span>Neeraj</span> </h1>
        <p>FRONT END DEVELOPER AND BLOCKCHAIN DEVELOPER.</p>
        <div className="btns">
          <a href={Resume} download=""><button>Download CV</button></a>
          <Link href='' to='/about' > <button>About me</button></Link> 
        </div>
    </div>
    <div className="cols cols1">
        <div className="imgbox">
            <div className="splash"></div>
            <Picture/>
        </div>
    </div>
    </div>
  )
}
