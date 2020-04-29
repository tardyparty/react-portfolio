import React from 'react';
import './app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";


function App() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="icons">
            <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </a>
              </div>
              <div className="iconpair text-center">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank">
                  <h3> linkedin </h3>
                </a>
              </div>
            </div>
              <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
                </a>
              </div>
              <div className="iconpair text-center">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <h3> github </h3>
                </a>
              </div>
            </div>
            <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://gdoc.pub/doc/1VcD9YALwryRVHumeN0URlVQ1MKuuWwN3CFqE-Bg5VeM#?usp=sharing"
                  target="_blank">
                  <FontAwesomeIcon icon={faSmile} size="3x"/>
                </a>
              </div>
              <div className="iconpair text-center">
                <a href="https://gdoc.pub/doc/1VcD9YALwryRVHumeN0URlVQ1MKuuWwN3CFqE-Bg5VeM#?usp=sharing"
                  target="_blank">
                  <h3> resume </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="projectdiv">
            <div className="projectsTitle text-center">Projects</div>
              <div className="project">
                Happy Camper
                <div className="projectLinks">
                  <a href="http://happycamperapp.herokuapp.com/home"
                    target="_blank" 
                    className="linkClass">
                    <p className="linkP"><em className="yellow">{"{ "}</em><em className="blue">project</em><em className="yellow">{" }"}</em></p>
                  </a>
                  <a href="https://github.com/rbartl2/final-project" 
                    target="_blank"
                    className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="green">github</em><em className="yellow">{" }"}</em></p>
                  </a>
                </div>
              </div>
              <div className="project">
                Clicky Game
                <div className="projectLinks">
                  <a href="https://tardyparty.github.io/clickyGame/" target="_blank" className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="blue">project</em><em className="yellow">{" }"}</em></p>
                  </a>
                  <a href="https://github.com/tardyparty/clickyGame"
                    target="_blank"
                    className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="green">github</em><em className="yellow">{" }"}</em></p>
                  </a>
                </div>
              </div>
              <div className="project">
                Google Books
                <div className="projectLinks">
                  <a href="https://floating-bayou-94316.herokuapp.com/mybooks" target="_blank" className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="blue">project</em><em className="yellow">{" }"}</em></p>
                  </a>
                  <a href="https://github.com/tardyparty/gBooks"
                    target="_blank"
                    className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="green">github</em><em className="yellow">{" }"}</em></p>
                  </a>
                </div>
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
