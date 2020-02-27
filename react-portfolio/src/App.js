import React from 'react';
import './app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";


function App() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="icons">
            <div className="linkicon">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank"> 
                  <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                  <h3> linkedin </h3>
                </a>
              </div>
              <div className="linkicon">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
                  <h3> github </h3>
                </a>
              </div>
              <div className="linkicon">
                <a href="https://docs.google.com/document/d/e/2PACX-1vTEx96y-lm3S0Xy5I7NuxJSDUuZOI26-ld1ESDcA8eOtKTmE3acX6eP-oSnWt29ltDIyIcDMA4zNO8J/pub"
                  target="_blank">
                  <FontAwesomeIcon icon={faFile} size="3x"/>
                  <h3> resume </h3>
                </a>
              </div>
          </div>
        </div>
        <div className="main">
          <div className="projectdiv">
            <div className="project">
              Book Club
            </div>
            <div className="project">
              Happy Camper
            </div>
            <div className="project">
              Clicky Game
            </div>
            <div className="project">
              MedSched
            </div>
          </div>
        </div>
        <div className="bio">
          <div className="bioFunction">
            <p className="name">David Tardy</p>
            <p>
              <em className="blue title">fullstack</em>.<em className="green title">developer</em>
              <em className="pink title">()</em> <em className="yellow title"> {"{"} </em> <br></br>
              &emsp;focused on developing new <br></br>
              &emsp;skills in challenging environments. <br></br>
              <em className="yellow title"> {"}"} </em> ;
            </p>
            <p>
              <em className="pink"> class </em> <em className="blue"> TechnicalSkills </em>
              = <em className="green"> function</em> <em className="pink">() </em> 
              <em className="yellow">{"{"}</em> <br></br>
              &emsp;<em className="green">return </em> <em className="pink">(</em><br></br>
              &emsp;&emsp;<em className="orange">languages</em> : <em className="purple"> [ </em><br></br>
              &emsp;&emsp;&emsp;Javascript, <br></br>
              &emsp;&emsp;&emsp;HTML / CSS, <br></br>
              &emsp;&emsp;&emsp;Python <br></br>
              &emsp;&emsp;<em className="purple">]</em> , <br></br>
              &emsp;&emsp;<em className="orange">frameworks</em> : <em className="purple"> [ </em><br></br>
              &emsp;&emsp;&emsp;React, <br></br>
              &emsp;&emsp;&emsp;Node, <br></br>
              &emsp;&emsp;&emsp;Express, <br></br>
              &emsp;&emsp;&emsp;Mongoose <br></br>
              &emsp;&emsp;<em className="purple">]</em> , <br></br>
              &emsp;&emsp;<em className="orange">databases</em> : <em className="purple"> [ </em><br></br>
              &emsp;&emsp;&emsp;MongoDB, <br></br>
              &emsp;&emsp;&emsp;MySQL <br></br>
              &emsp;&emsp;<em className="purple">]</em><br></br>
              &emsp;<em className="purple">)</em><br></br>
              <em className="yellow">{"}"}</em>;
            </p>
          </div>
        </div>
      </div>
    );
}

export default App;
