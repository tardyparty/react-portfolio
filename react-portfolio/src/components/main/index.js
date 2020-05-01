import React from "react";
import "./style.css";

const Main = function() {
    return (
        <div className="main">
          <div className="projectdiv">
            <div className="projectsTitle text-center">Projects</div>
              <div className="project">
                <div className="thisProjectTitle">
                  Happy Camper
                </div>
                <div className="projectContent">
                  <div className="smallContent">
                    <p className="smallTitle">
                      About:
                    </p>
                    <p className="about">
                      Happy Camper is a gear rental site for beginner campers. Gear packages are put together based on their needs, as well as the ability to ask questions in a forum and search for campsites nationwide.
                    </p>
                    <div className="divider"></div>
                    <a href="http://happycamperapp.herokuapp.com/home"
                    target="_blank" 
                    className="linkClass">
                    <p className="linkP"><em className="yellow">{"{ "}</em><em className="blue">project</em><em className="yellow">{" }"}</em></p>
                  </a>
                  </div>
                  <div className="smallContent">
                    <p className="smallTitle">
                      Tech:
                    </p>
                    <p className="about">
                      <strong>Frontend:</strong> React, Redux, Bootstrap <br></br>
                      <strong>Backend:</strong> Node, Mongo, Passport, JSon Web Tokens <br></br>
                      <strong>My Role:</strong> Entirety of Backend, Frontend Framework, Authorization, Redux
                    </p>
                    <div className="divider"></div>
                    <a href="https://github.com/rbartl2/final-project" 
                    target="_blank"
                    className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="green">github</em><em className="yellow">{" }"}</em></p>
                  </a>
                  </div>
                </div>
              </div>
              {/* <div className="project">
                <div className="thisProjectTitle">
                  Clicky Game
                </div>
                <div className="projectContent">
                  <div className="smallContent">
                    <p className="smallTitle">
                      About:
                    </p>
                    <p className="about">
                      Clicky Game is a simple memory Game built using React.
                    </p>
                  </div>
                  <div className="smallContent">
                    <p className="smallTitle">
                      Tech:
                    </p>
                    <p className="about">
                      React
                    </p>
                  </div>
                </div>
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
              </div> */}
              <div className="project">
                <div className="thisProjectTitle">
                Google Books
                </div>
                <div className="projectContent">
                  <div className="smallContent">
                    <p className="smallTitle">
                      About:
                    </p>
                    <p className="about">
                      Google Books is a fullstack app that allows users to search the Google Books API and save their favorite books to a List where they can see all of their books.
                    </p>
                    <div className="divider"></div>
                    <a href="https://floating-bayou-94316.herokuapp.com/mybooks" target="_blank" className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="blue">project</em><em className="yellow">{" }"}</em></p>
                    </a>
                  </div>
                  <div className="smallContent">
                    <p className="smallTitle">
                      Tech:
                    </p>
                    <p className="about">
                      <strong>Frontend:</strong> React, Bootstrap, Google Books API <br></br>
                      <strong>Backend:</strong> Node, Mongo, Mongoose <br></br>
                      <strong>My Role:</strong> Built everything
                    </p>
                    <div className="divider"></div>
                    <a href="https://github.com/tardyparty/gBooks"
                    target="_blank"
                    className="linkClass">
                    <p><em className="yellow">{"{ "}</em><em className="green">github</em><em className="yellow">{" }"}</em></p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Main;