import linkedIn from './linkedIn.webp';
import resume from './resume.png';
import gitHub from './github logo.png';
import cSharpLogo from './Csharp_Logo.png';
import cssLogo from './css logo.png';
import gitLogo from './git logo.png';
import githubLogo from './github logo.png';
import javaLogo from './java logo.png';
import javaScriptLogo from './javascript logo.png';
import mySQLLogo from './mysql logo.webp';
import reactLogo from './react logo.png';
import springbootLogo from './springboot logo.png';
import jacePic2 from './JacePic2.png';
import jaceHeadshot from './jaceheadshot.png'
import mgLogo from './mglogo.png';
import nflscreenshot from './nfldlescreenshot.png';
import wordWarden from './WordWarden.png';
import BeaconLogin from './BeaconLogin.png';
import BeaconDB from './BeaconDB.png';
import './App.css';
import './Experience.css';
import './Skills.css';
import './Projects.css';
// import { Linking } from 'react-native'
import { useEffect, useRef, useState} from 'react';



function App() {
const [proj1Visible, setproj1Visible] = useState(false);
const [proj2Visible, setproj2Visible] = useState(false);
const [proj3Visible, setproj3Visible] = useState(false);
const [proj4Visible, setproj4Visible] = useState(false);

function proj1Button(){
  setproj1Visible(true);
  setproj2Visible(false);
  setproj3Visible(false);
  setproj4Visible(false);
}

function proj2Button(){
  setproj2Visible(true);
  setproj1Visible(false);
  setproj3Visible(false);
  setproj4Visible(false);
}

function proj3Button(){
  setproj3Visible(true);
  setproj1Visible(false);
  setproj2Visible(false);
  setproj4Visible(false);
}

function proj4Button(){
  setproj4Visible(true);
  setproj1Visible(false);
  setproj2Visible(false);
  setproj3Visible(false);
}

  return (
    
  <div className="App">
        <div className = "pad"></div>
        <div className="App-header">
        <img src={linkedIn} className="LI-logo" alt="logo" onClick={linkedInClick} />
        <img src={gitHub} className="gitHub-logo" alt="logo" onClick={gitHubButtonClick} />
        <img src={resume} className="resume-logo" alt="logo" onClick={resumeButtonClick} />
      </div>
      <BigDiv className="App-Main bgtint">
      <div className='TextDiv'>
      <img src={jaceHeadshot} className="headshot" alt="Picture of Jace Lander"/>
      <p className='Title'>Jace Lander</p>
      <p className='element-text'> 
      Full stack software developer from Olmsted Falls, OH </p>
      <p className='element-text'>
      Student at Baldwin Wallace University </p>
      </div>
      </BigDiv>
      <BigDiv>
      <div>
      <p className='Title center'>Skills</p>
      <div className='logo-container white'>
        <div className='row'>
        <div className='column'>
          <img src={javaLogo} className="logo-skills" alt="Java"/>
          <p className='label-text'> Java </p>
        </div>
        <div className='column'>
          <img src={javaScriptLogo} className="logo-skills" alt="JavaScript"/>
          <p className='label-text'> JavaScript </p>
        </div>
        <div className='column'>
          <img src={cSharpLogo} className="logo-skills"alt="CSharp"/>
          <p className='label-text'> C Sharp </p>
        </div>
        </div>
        <div className='row'>
        <div className='column'>
          <img src={mySQLLogo} className="logo-skills" alt="MySQL"/>
          <p className='label-text'> SQL </p>
        </div>
        <div className='column'>
          <img src={gitLogo} className="logo-skills" alt="git"/>
          <p className='label-text'> Git </p>
        </div>
        <div className='column'>
          <img src={githubLogo} className="logo-skills" alt="github"/>
          <p className='label-text'> GitHub </p>
        </div>
        </div>
        <div className='row'>
        <div className='column'>
          <img src={reactLogo} className="logo-skills" alt="react"/>
          <p className='label-text'> React </p>
        </div>
        <div className='column'>
          <img src={cssLogo} className="logo-skills" alt="css"/>
          <p className='label-text'> css </p>
        </div>
        <div className='column'>
          <img src={springbootLogo} className="logo-skills" alt="springboot"/>
          <p className='label-text'> SpringBoot </p>
        </div>
      </div>
     </div>
      </div>
        <div className='big-column'>
          <p className='Title center experience'>Experience</p>
            <div className='experience-container'>
              <div className='row experience'>
                  <img src={mgLogo} className="mgLogo" alt="mission guatemala"/>
                <div>
                  <p className="experience-text title white"> Mission Guatemala Medical Records Database Software</p>
                <div className='row org-time'>
                  <div className="experience-text organization white"> Baldwin Wallace University</div>
                  <div className='timeorggap'></div>
                  <div className="experience-text time white"> 2024-current</div>
                </div>
                  <p className="experience-text white subtext"> Worked on a multi-phase, multi-year project developing 
                  a fullstack database software for a rural clinic in Guatemala using various industry standard technologies
                  such as C# and SQL as part of a larger team.</p>
              </div>
          </div>
     </div>
      </div>
      </BigDiv>
      <BigDiv >
      <div className='big-div'>
        <p className='Title center experience'>Projects</p>
          <div className='projects-container'>
              <div className='projects-buttons'>
                    <button className={`project-button font ${proj1Visible ? "selected" : ""}`} 
                    onClick={proj1Button}>NFLdle</button>
                    <button className={`project-button font ${proj2Visible ? "selected" : ""}`}
                    onClick={proj2Button}>Word Warden</button>
                    <button className={`project-button font ${proj3Visible ? "selected" : ""}`}
                    onClick={proj3Button}>Beacon</button>
                    <button className={`project-button font ${proj4Visible ? "selected" : ""}`}
                    onClick={proj4Button}>This Website</button>
              </div>
            <div className='projects-seperator'></div>
            <div className={`project-preview ${proj1Visible ? "toggled" : ""}`}>
              <div className='column'>
                {/* <img src={nfliphonescreenshot} className='project-image'></img> */}
                <img src={nflscreenshot} className='project-image' style={{height: "15vw",
                width:"30vw", margin:"auto", paddingTop:"1vw"}} alt="Screenshot of NFLdle"></img>
                <div style={{width:"45vw", padding:"1vw", textAlign:"center", alignSelf:"center"}} className='font'>NFLdle is a front end react app utilizing sportsData.io's 
                    RESTful API and deployed with cloudflare. The application utilizes live-rendered
                    elements in response to user input and fetches data in such a way to minimize API calls 
                    and maximize performance. </div>
              </div>
            </div>
            <div className={`project-preview ${proj2Visible ? "toggled" : ""}`}>
            <div className='column'>
                <img src={wordWarden} className='project-image' style={{height: "15vw",
                width:"auto", margin:"auto", paddingTop:"1vw"}} alt="Word Warden screenshot"></img>
                <div style={{width:"45vw", padding:"1vw", textAlign:"center" , alignSelf:"center"}} className='font'>Word Warden is a fullstack project with the backend &
                database handled using supabase. It was released with feedback on how to improve
                it and with many bugs that had to be quickly handled, giving lots of quick experience
                on deploying a web app. </div>
              </div>
            </div>
            <div className={`project-preview ${proj3Visible ? "toggled" : ""}`}>
            <div className='column'>
              <div className='row'>
                <img src={BeaconLogin} className='project-image' style={{height: "15vw",
                width:"auto", margin:"auto", paddingTop:"1vw"}} alt="Screenshot Beacon Login Screen"></img>
                <img src={BeaconDB} className='project-image' style={{height: "15vw",
                width:"auto", margin:"auto", paddingTop:"1vw"}} alt="Screenshot of Beacon MySQL Database"></img>
              </div>
                <div style={{width:"45vw", padding:"1vw", textAlign:"center", alignSelf:"center"}} className='font'>Beacon is a work-in-progress
                full-stack application dedicated to reviewing games, building a backlog and sharing with friends. 
                The database is using MySQL, backend developed with Java and SpringBoot, and frontend in React. This project
                is hoped to be released sometime early 2026.</div>
              </div>
            </div>
            <div className={`project-preview ${proj4Visible ? "toggled" : ""}`}>
            <div className='column'>
                <div style={{width:"45vw", padding:"1vw", textAlign:"center", alignSelf:"center"}} className='font'>Always improving and always changing, this Website
                is an evolving display of my current state in the ever-evolving field of Software development. Come back in a month
                and I am sure to have improved this site in some way!</div>
              </div>
            </div>
            
          </div>

      </div>
      </BigDiv>


          <BigDiv className="App-Main bgtint" >
          <div className='TextDiv'> <p className='Title'>A Little More About Me</p><p className='element-text'> Beyond my software engineering experience, I have had experience in leadership and professional development.
          I am the president of the Baldwin Wallace Rugby club where I have set up group events and manage the official instagram. I am currently slated
          to graduate in spring of 2026, and have a 3.75 GPA. I have a genuine excitement for software and what it has the capability to do, so if any of this 
          seems interesting to you please feel free to reach out!</p>
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
          { threshold: 0.65 }
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
