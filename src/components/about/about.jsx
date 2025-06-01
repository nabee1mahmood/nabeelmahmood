import React from 'react';
import './about.css';
 import profile_img from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/IMG_1778.png';  // Use relative paths



const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me </h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            
            <div className="about-section">
                <div className="about-left">
                <div className="image-container">
                <img src={profile_img} alt="Profile Image" className="profile-image" style={{ width: '350px', height: 'auto' }} />

                </div>
                
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        I am currently studying Computer Science at the University of Arkansas - Fort Smith.
                        As a Pakistani American, I’m deeply passionate about exploring machine learning and to learn more about on the cutting edge of new technologies. Throughout my courses, 
                        I’ve built a strong foundation in data structures, databases, and algorithms, which has only deepened my passion for Artificial Intelligence and Data Science. 
                        I’m always eager to learn more and grow in this ever-evolving tech field.
                        </p>
                        <p>
                           

                        

                      I’m always excited about learning more about artificial intelligence, data science, and becoming a data scientist. What I love about this field is the opportunity to learn new technologies and how algorithms can be applied to real-world applications. 
                      Whether I’m optimizing code or experimenting with new ideas,
                      I’m always excited to take on new challenges and discover the endless possibilities this field has to offer.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Python</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: '85%' }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: '65%' }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '61%' }} /></div>
                        <div className="about-skill"><p>R</p><hr style={{ width: '55%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
      <div className="about-achievement">
        <h1>3.42 GPA</h1>
        <p>OVERALL GPA</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>5</h1>
        <p>PROGRAMMING LANGUAGES</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>3</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>20+</h1>
        <p>COURSES TAKEN</p>
      </div>
    </div>
    </div>
  );
};

export default About;
