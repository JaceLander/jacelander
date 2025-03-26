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
import { useEffect } from 'react';
//  import useIsVisible from './useIsVisible.js';
import { useRef } from 'react';

function App() {
  // const targetParagraph = useRef();
  // const targetParagraphVisible = useIsVisible(targetParagraph);

  // Define static styles which will not change
  // const style = {
    
  //   dynamicBackground: {
  //   // !!! Here based on the value of targetParagraphVisible which will be true or falce we will assign pink or yellow background
  //     backgroundColor: targetParagraphVisible ? 'pink' : 'yellow',
  //   },
  // };


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
       <bigDiv className="App-Main bgtint" > 
      </bigDiv>
      <bigDiv className="App-Main bgtint">
      <p className='element-text'> Hello! My name is Jace Lander and I am a studying software engineer from Olmsted Falls, OH. I am currently studying at Baldwin Wallace in their Software engineering
          program and currently working on their software for a nonprofit organization, Mission Guatemala by being a fullstack developer.  </p>
          <img src={jacePic1} className="element-pic"/>
      </bigDiv>
      <bigDiv className="App-Main bgtint">
      <img src={jacePic2} className="element-pic"/>
          <p className='element-text'>Currently my experience in software engineering has led me to learn many programming languages, such as C, C#, R, Java, JavaScript, and have gained experience utilizing
          other tools and frameworks like Git, React, SQL and Balsamiq.  </p>
      </bigDiv>


          <bigDiv className="App-Main bgtint">
          <p className='element-text'> Beyond my software engineering experience, I have had experience in leadership and professional development.
          I am the president of the Baldwin Wallace Rugby club where I have set up group events and manage the official instagram. </p>
          <img src={jacePic3} className="element-pic"/>
          </bigDiv>
        

      <div className='App-Main-Bottom'>        
        <ReachOutButton className='reach-out-button'></ReachOutButton>
      </div>
    </div>

  );

}


function ShowContactInfo(){
var email = document.getElementById('email');
email.ariaSetSize(10);
}

function ReachOutButton() {
  return (
    <button className='reach-out-button'>will work</button>
  );
}

function bigDiv() {
  return (
    
    <div> </div>
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



export default App;
