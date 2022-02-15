import { Paper} from '@material-ui/core';
import "./portfolio.scss";
import React, {useState, useEffect} from 'react'
import EducationService from '../services/EducationService';
import ExperienceService from '../services/ExperienceService'
function Portfolio() {
    const paperStyle={padding:"50px 20px", width:500,margin:"20px auto"}
    const [educations, setEducations] = useState([])
    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        getEducations() ; 
        getExperiences() 

    }, [])
    
    

    const getEducations = () => {

        EducationService.getEducations().then((response) => {
            setEducations(response.data)
            console.log(response.data);
        });
    };


    const getExperiences = () => {

      ExperienceService.getExperiences().then((response) => {
          setExperiences(response.data)
          console.log(response.data);
      });
  };
    return (
     <div className='Portfolio' id="portfolio">

     <div className="left">

      <h2>Education</h2>
    
               <Paper elevation={3} style={paperStyle}>
                      {  educations.map(
                                education =>
                                <Paper elevation={6} style={{margin:"20px", padding:"20px",textAlign:"left"}} key = {education.id}> 
                                
                                    
                              <h5> {education.periode }  : <h3>  {education.specialité } </h3> </h5> 
                                  <div className='specialité'>   
                               <h5>     {education.nom_etablissement } </h5>  <br/>

                               </div>
                                </Paper>
                        )
                    
                      }
                      </Paper>
                
                     
        </div>
        
        <div className="right">
        <h2>Experience</h2>
    
    <Paper elevation={3} style={paperStyle}>
           {  experiences.map(
                     experience =>
                     <Paper elevation={6} style={{margin:"20px", padding:"20px",textAlign:"left"}} key = {experience.id}> 
                     
                      <h4> {experience.periode} :   {experience.nom }  </h4>
                    <h5> {experience.description } </h5> 
                          
                       

                     
                     </Paper>
             )
         
           }
           </Paper>
     
          
</div>
        
        
        
        </div>
        
    );
    
}

export default Portfolio;
