import React from "react";
import "./style.css";

const Main = function() {
    return (
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
    )
}

export default Main;