import React from 'react';
import './app.css';

// import Sidebar from "./components/sidebar";

function App() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="icons">
            <div className="linkicon">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank"> 
                  <i className="fab fa-linkedin">
                  </i>
                  <h3> linkedin </h3>
                </a>
              </div>
              <div className="linkicon">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <i class="fab fa-github-square"></i>
                  <h3> github </h3>
                </a>
              </div>
              <div className="linkicon">
                <a href="https://docs.google.com/document/d/e/2PACX-1vTEx96y-lm3S0Xy5I7NuxJSDUuZOI26-ld1ESDcA8eOtKTmE3acX6eP-oSnWt29ltDIyIcDMA4zNO8J/pub"
                  target="_blank">
                  <i class="far fa-file">
                  </i>
                  <h3> resume </h3>
                </a>
              </div>
          </div>
        </div>
        <div className="main">
          <div className="projectdiv">
            <div className="project">

            </div>
            <div className="project">
              
            </div>
          </div>
        </div>
        <div className="bio">
          <div className="bioFunction">
            <p className="name">David Tardy</p>
            <p>
              <em className="blue title">fullstack</em>.<em className="green title">developer</em>
              <em className="pink title">()</em> <em className="yellow title"> {"{"} </em> <br></br>
              focused on developing new <br></br>
              skills in challenging environments. <br></br>
              <em className="yellow title"> {"}"} </em> ;
            </p>
            <p>
              <em className="pink"> class </em> <em className="blue"> TechnicalSkills </em>
              = <em className="green"> function</em> <em className="pink">() </em> 
              <em className="yellow">{"{"}</em> <br></br>
              <em className="green">return </em> <em className="pink">(</em><br></br>
                <em className="orange">languages</em> : <em className="purple"> [ </em><br></br>
              Javascript, <br></br>
              HTML / CSS, <br></br>
              Python <br></br>
              <em className="purple">]</em> , <br></br>
              <em className="orange">frameworks</em> : <em className="purple"> [ </em><br></br>
              React, <br></br>
              Node, <br></br>
              Express, <br></br>
              Mongoose <br></br>
              <em className="purple">]</em> , <br></br>
              <em className="orange">databases</em> : <em className="purple"> [ </em><br></br>
              MongoDB, <br></br>
              MySQL <br></br>
              <em className="purple">]</em><br></br>
              <em className="purple">)</em><br></br>
              <em className="yellow">{"}"}</em>;
            </p>
          </div>
        </div>
      </div>
    );
}

export default App;
