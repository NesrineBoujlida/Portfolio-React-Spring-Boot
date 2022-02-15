import { AnimatedLineProgressBar , LineProgressBar} from '@frogress/line'
import React from 'react';
import './skills.scss';

export default function Skills() {
  return(
  <div className='Skills' id="Skills">
    
    <div className="first">
    <div className="left">
   
   <div className="comp">
     <h4>ANGULAR</h4>
  
<AnimatedLineProgressBar
  progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
  transition={{ easing: 'easeInOut' }}
  
/> 
</div>
<div className="comp">
<h4>HTML:</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> 
</div>
<div className="comp">
<h4>CSS:</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> 
</div>
<div className="comp">
<h4>BOOTSTRAP</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> </div>
<div className="comp">
<h4>Spring Boot</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/>
</div>
<div className="comp">
   <h4> JEE Spring</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/>
 </div>
  </div>
  </div>
  <div className='first'>
  <div className="right">
 
  <div className="comp">
  <h4>MySQL</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/>
</div>
<div className="comp">
<h4>JAVA</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> </div>
<div className="comp">

<h4>PYTHON</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> </div>
 <div className="comp">
<h4>C / C++</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/></div>
<div className="comp">
<h4>PHP</h4>
   <LineProgressBar
   progressColor='#00BFFF'
  percent={70}
  rounded={26}
  height={20}
  width={350}
/> </div>
<div className="comp">
<h4>PostgresSQL</h4>
   <LineProgressBar
   progressColor='#00BFFF'
   percent={70}
  rounded={26}
  height={20}
  width={350}
/>
</div>
</div>
 </div>
 </div>
    
  

  );
}

