import logo from './JaceLanderPhoto.jpeg';
import linkedIn from './linkedIn.webp';
import resume from './resume.jpg';
import gitHub from './github logo.png';
import jacePic1 from './JacePic1.png';
import jacePic2 from './JacePic2.png';
import jacePic3 from './JacePic3.png';
import jaceBG from './JaceLanderBGPhoto.png';
import logoThing from './logo.png';
import './App.css';


function App() {

  return (
  <div className="App">
      <div className="App-Header-Layout">
        <div className="App-header">
        <img src={logoThing} className="logo-" alt="logo"/>

          <img src={linkedIn} className="LI-logo" alt="logo" onClick={linkedInClick} />
          <img src={gitHub} className="gitHub-logo" alt="logo" onClick={gitHubButtonClick} />
          <img src={resume} className="resume-logo" alt="logo" onClick={resumeButtonClick} />
          <img src={logo} className="App-logo" alt="logo"/>



        </div>
      </div>
      <div className="App-Main bgtint">
          <p className='element-text'> Hello! My name is Jace Lander and I am a studying software engineer from Olmsted Falls, OH. I am currently studying at Baldwin Wallace in their Software engineering
          program and currently working on their software for a nonprofit organization, Mission Guatemala by being a fullstack developer.  </p>
          <img src={jacePic1} className="element-pic"/>
          <img src={jacePic2} className="element-pic"/>
          <p className='element-text'>Currently my experience in software engineering has led me to learn many programming languages, such as C, C#, R, Java, JavaScript, and have gained experience utilizing
          other tools and frameworks like Git, React, SQL and Balsamiq.  </p>
          <p className='element-text'> Beyond my software engineering experience, I have had experience in leadership and professional development.
          I am the president of the Baldwin Wallace Rugby club where I have set up group events and manage the official instagram. </p>
          <img src={jacePic3} className="element-pic"/>
        
      </div>
      <div className='App-Main-Bottom'>        
        <button className='reach-out-button' onClick={directReach}>Want to Reach Out Directly?</button>
      </div>
    </div>
    
  );




}
function linkedInClick(){
    window.open("https://www.linkedin.com/in/jace-lander-93a999337/");
}
function resumeButtonClick(){
  window.open("https://drive.google.com/file/d/1LTdneHz5Hk7UkLa38zEG1XCgdJokBvD5/view?usp=sharing");
}

function gitHubButtonClick(){
  window.open("https://github.com/JaceLander");
}

function directReach(){
  const button = document.querySelector('.reach-out-button');
  button.classList.toggle('enlarged'); // Toggles the enlarged class
}


export default App;
