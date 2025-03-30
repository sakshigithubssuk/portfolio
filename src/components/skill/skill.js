import React from "react";
import './skill.css';
import machinelogo from '../../assets/machinelogo.jpg';
import pythonlogo from '../../assets/pythonlogo.jpg';
import weblogo from '../../assets/weblogo.jpg';

const skill=()=>{
  return(
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate to solving a real world problem with help of the coding in different languages which help to make the things flexible</span>
      <div className="skillBars">
      <div className="skillBar">
        <img src={weblogo}alt="skillBar"className="skillBarImg"></img>
        <div className="skillBarText">
          <h2>Web Devlopment</h2>
          <h3>E-commerce Website</h3>
          <p>Basically this is the E-commerce website where an user can purchase the clothes.you can visit this website for more visulaization by given link below </p>
        </div>
        </div>
        <div className="skillBar">
        <img src={machinelogo}alt="skillBar"className="skillBarImg"></img>
        <div className="skillBarText">
          <h2>Machine Learning</h2>
          <h3>Fake News Detection</h3>
          <p>Classify news articles real or fake based on text</p>
        </div>
        </div>
        <div className="skillBar">
        <img src={pythonlogo}alt="skillBar"className="skillBarImg"></img>
        <div className="skillBarText">
          <h2>Python</h2>
          <h3>Built-in</h3>
          <p>Find the solutiion of Gates equation,Kmap of Digital Designing</p>
        </div>
        </div>
      </div>
    </section>
  );
}
export default skill;