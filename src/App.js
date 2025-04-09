import linkedIn from './linkedIn.webp';
import resume from './resume.png';
import gitHub from './github logo.png';
import jacePic1 from './JacePic1.png';
import jacePic2 from './JacePic2.png';
import jaceheadshot from './jaceheadshot.png'
import logoThing from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NewPage from './NewPage';
import { Linking } from 'react-native'
import { useEffect, useRef, useState} from 'react';



function App() {
  return (
  <div className="App">
      <div className="App-Header-Layout">
        <div className = "pad"></div>
        <div className="App-header">
        <img src={logoThing} className="logo-" alt="logo"/>
        <img src={linkedIn} className="LI-logo" alt="logo" onClick={linkedInClick} />
        <img src={gitHub} className="gitHub-logo" alt="logo" onClick={gitHubButtonClick} />
        <img src={resume} className="resume-logo" alt="logo" onClick={resumeButtonClick} />
        <ProjectsButton className='projects-button'>Projects</ProjectsButton>

        </div>
      </div>

      <BigDiv className="App-Main bgtint" >
      <div className='TextDiv'> <p className='Title'>Hello!</p><p className='element-text'> My name is Jace Lander and I am a software engineer from Olmsted Falls, OH. I am studying at Baldwin Wallace in their Software Engineering program, and am currently working as a co-tech lead on a team supporting software for the nonprofit organization Mission Guatemala.  </p></div>
          <img src={jaceheadshot} className="element-pic toppad" alt=""/>

      </BigDiv>
      <BigDiv className="App-Main bgtint">
      <img src={jacePic1} className="element-pic" alt=""/>
         <div className='TextDiv'> <p className='Title'>Experience</p> 
         <p className='element-text'>My experience in software engineering has led me to learn many programming languages, such as C, C#, R, Java, JavaScript, and have gained experience utilizing
          other tools and frameworks like Git, React, SQL and Balsamiq.  </p>
          </div> 
      </BigDiv>


          <BigDiv className="App-Main bgtint">
          <div className='TextDiv'> <p className='Title'>Beyond SE</p><p className='element-text'> Beyond my software engineering experience, I have had experience in leadership and professional development.
          I am the president of the Baldwin Wallace Rugby club where I have set up group events and manage the official instagram. </p>
          </div>
          <img src={jacePic2} className="element-pic" alt=""/>
          </BigDiv>
        

      <div className='App-Main-Bottom' >        
        {/* <ReachOutButton className='reach-out-button' onClick={openMailApp}></ReachOutButton> */}
      </div>
    </div>

  );

}

function ReachOutButton() {
  return (
    <button className='reach-out-button'>Reach Out</button>
  );
}

function ProjectsButton() {
  return (
    <button className='projects-button'>Projects</button>
  );
}

function BigDiv({children}) {
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true); 
              } else {
                setIsVisible(false); 
              }
          },
          { threshold: 0.9 }
      );

      if (divRef.current) observer.observe(divRef.current);

      return () => observer.disconnect();
  }, []);

  return (
      <div className='App-Main bgtint' ref={divRef}       
      style={{
        transform: isVisible ? 'scale(1.05)' : 'scale(1)', // Scale up when visible
        transition: 'transform 0.5s ease', // Smooth transition for scaling
      }}>
          {children}
      </div>
  );
}

function linkedInClick(){
    window.open("https://www.linkedin.com/in/jace-lander-93a999337/");
}
function resumeButtonClick(){
  window.open("https://drive.google.com/file/d/1O58p7udLRbKBdEwKO2OWM99zz9XyUYxr/view?usp=drive_link");
}

function gitHubButtonClick(){
  window.open("https://github.com/JaceLander");
}

const openMailApp = () => {
  Linking.openURL('mailto:jacethelander@gmail.com')
};

export default App;
