import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import pdf from '../../Assets/CV_Nesrine.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineering Student"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/nes.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Nesrine Boujlida</h1>
          
          <h2> <span ref={textRef}></span> </h2>
          
          <Button variant="primary" href={pdf} target="_blank" >
            
            <div className="button">
            <AiOutlineDownload />
            &nbsp;<h4>Download CV</h4>
            </div>
          </Button>
        
          </div>
        </div>
       
      </div>
   
  );
}
