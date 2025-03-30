import React from 'react';
import './works.css';
import '../skill/skill.css';
import nitplogo from '../../assets/nitplogo.jpg';
const Works = () => {
    return (
       <section id='works'>
             <span className="skillTitle">Eductaion</span>
            
             <div className="skillBars">
             <div className="skillBar">
               <img src={nitplogo}alt="skillBar"className="skillBarImg"></img>
               <div className="skillBarText">
                 <h2>National Institute Of Technology Patna</h2>
                 <h3>Electronics and Communication Engineering</h3>
                 <p className='marks'> 9.56 cgpa </p>
               </div>
               </div>
               <div className="skillBar">
               {/* <img src={work1}alt="skillBar"className="skillBarImg"></img> */}
               <div className="skillBarText">
                 <h2>Durgawati Uch Madhyamik Vidalaya</h2>
                 <h3>Bihar School Examination Board,Bihar</h3>
                 <p className='marks'>79.8%</p>
               </div>
               </div>
               <div className="skillBar">
               {/* <img src={work1}alt="skillBar"className="skillBarImg"></img> */}
               <div className="skillBarText">
                 <h2>Ishwar Chandra Vidyasagar Public School</h2>
                 <h3>Central Board Of Education,Bihar</h3>
                 <p className='marks'>85.8%</p>
               </div>
               </div>
             </div>
        </section>
    );
}

export default Works;