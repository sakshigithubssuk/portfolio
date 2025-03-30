import React from "react";
import './intro.css';
import photo from '../../assets/photo.png';
import { Link } from 'react-scroll';
import hireme from '../../assets/hireme.png';

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sakshi_Kumari_cV.pdf"; // Ensure the file is in the public folder
    link.download = "Sakshi_Kumari_cV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello!</span>
        <span className="introText">I'm <span className="introName">Sakshi Kumari</span><br />FullStack Developer</span>
        <p className="introPara">
          I am a skilled web designer with experience in creating<br /> visually appealing and user-friendly websites
        </p>
        <div className="btnseprate">
          <Link>
            <button className="btn">
              <img src={hireme} className="btnImg" alt="hireme" />Hire Me
            </button>
          </Link>
          <button className="cv btn" onClick={handleDownload}>Download CV ⬇</button>
        </div>
      </div>
      <img src={photo} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;