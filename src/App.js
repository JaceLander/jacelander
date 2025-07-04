import linkedIn from './linkedIn.webp';
import resume from './resume.png';
import gitHub from './github logo.png';
import cLogo from './C Logo.png';
import cSharpLogo from './Csharp_Logo.png';
import cssLogo from './css logo.png';
import gitLogo from './git logo.png';
import githubLogo from './github logo.png';
import javaLogo from './java logo.png';
import javaScriptLogo from './javascript logo.png';
import mySQLLogo from './mysql logo.webp';
import reactLogo from './react logo.png';
import springbootLogo from './springboot logo.png';
import jacePic1 from './JacePic1.png';
import jacePic2 from './JacePic2.png';
import jaceHeadshot from './jaceheadshot.png'
import logoThing from './logo.png';
import mgLogo from './mglogo.png';
import './App.css';
// import { Linking } from 'react-native'
import { useEffect, useRef, useState} from 'react';



function App() {
  return (
    
  <div className="App">
        <div className = "pad"></div>
        <div className="App-header">
        {/* <img src={logoThing} className="logo-" alt="logo"/> */}
        <img src={linkedIn} className="LI-logo" alt="logo" onClick={linkedInClick} />
        <img src={gitHub} className="gitHub-logo" alt="logo" onClick={gitHubButtonClick} />
        <img src={resume} className="resume-logo" alt="logo" onClick={resumeButtonClick} />
        {/* <ProjectsButton></ProjectsButton> */}
      </div>
      <BigDiv className="App-Main bgtint" >
      <div className='TextDiv'>
      <img src={jaceHeadshot} className="headshot" alt=""/>
      <p className='Title'>Jace Lander</p>
      <p className='element-text'> 
      Full stack software developer from Olmsted Falls, OH </p>
      <p className='element-text'>
      Student at Baldwin Wallance University </p>
      </div>
      </BigDiv>
      <BigDiv>
      <div>
      <p className='Title center'>Skills</p>
      <div className='logo-container'>
        <div className='row'>
        <div className='column'>
          <img src={javaLogo} className="logo-skills"/>
          <p className='label-text'> Java </p>
        </div>
        <div className='column'>
          <img src={javaScriptLogo} className="logo-skills"/>
          <p className='label-text'> JavaScript </p>
        </div>
        <div className='column'>
          <img src={cSharpLogo} className="logo-skills"/>
          <p className='label-text'> C Sharp </p>
        </div>
        </div>
        <div className='row'>
        <div className='column'>
          <img src={mySQLLogo} className="logo-skills"/>
          <p className='label-text'> SQL </p>
        </div>
        <div className='column'>
          <img src={gitLogo} className="logo-skills"/>
          <p className='label-text'> Git </p>
        </div>
        <div className='column'>
          <img src={githubLogo} className="logo-skills"/>
          <p className='label-text'> GitHub </p>
        </div>
        </div>
        <div className='row'>
        <div className='column'>
          <img src={reactLogo} className="logo-skills"/>
          <p className='label-text'> React </p>
        </div>
        <div className='column'>
          <img src={cssLogo} className="logo-skills"/>
          <p className='label-text'> css </p>
        </div>
        <div className='column'>
          <img src={springbootLogo} className="logo-skills"/>
          <p className='label-text'> SpringBoot </p>
        </div>
      </div>
     </div>
      </div>
      <div>
      <p className='Title center'>Experience</p>
      <div className='experience-container'>
        <div className='row'>
          <img src={mgLogo} className="mgLogo"/>
          <div className='column'>
          <p className="experience-text"> Mission Guatemala Medical Records Database Software</p>
          <p className="experience-text"> Baldwin Wallace University</p>
          <p className="experience-text"> Worked on a large, multi-phase,</p>
        </div>
        </div>
     </div>
      </div>
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

// function ReachOutButton() {
//   return (
//     <button className='reach-out-button'>Reach Out</button>
//   );
// }

// function ProjectsButton() {
//   return (
//     <button>Projects</button>
//   );
// }

function BigDiv({children}) {
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  if (window.matchMedia('(pointer:fine)').matches) {

} else {

}

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
  window.open("https://drive.google.com/file/d/1h8qfTx_RAjxjMAG_ki2DqwnDISl8YDTE/view?usp=sharing");
}

function gitHubButtonClick(){
  window.open("https://github.com/JaceLander");
}

// const openMailApp = () => {
//   Linking.openURL('mailto:jacethelander@gmail.com')
// };

export default App;
