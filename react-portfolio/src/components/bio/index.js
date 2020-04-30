import React from "react";
import "./style.css";

const Bio = function() {
    return (
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
          <div className="bioMobile">
          <p className="nameMobile text-center">David Tardy</p>
            <p className="pMobile">
              <em className="blue titleMobile">fullstack</em>.<em className="green titleMobile">developer</em>
              <em className="pink titleMobile">()</em> <em className="yellow titleMobile"> {"{"} </em> <br></br>
              &emsp;focused on developing new skills in<br></br>
              &emsp;challenging environments. <br></br>
              <em className="yellow titleMobile"> {"}"} </em> ;
            </p>
            <p className="pMobile">
              <em className="pink bioMobileText"> class </em> <em className="blue bioMobileText"> TechnicalSkills </em>
              = <em className="green bioMobileText"> function</em> <em className="pink bioMobileText">() </em> 
              <em className="yellow bioMobileText">{"{"}</em> <br></br>
              &emsp;<em className="green bioMobileText">return </em> <em className="pink bioMobileText">(</em><br></br>
              &emsp;&emsp;<em className="orange bioMobileText">languages</em> : <em className="purple bioMobileText"> [ </em><br></br>
              &emsp;&emsp;&emsp;Javascript, <br></br>
              &emsp;&emsp;&emsp;HTML / CSS, <br></br>
              &emsp;&emsp;&emsp;Python <br></br>
              &emsp;&emsp;<em className="purple bioMobileText">]</em> , <br></br>
              &emsp;&emsp;<em className="orange bioMobileText">frameworks</em> : <em className="purple bioMobileText"> [ </em><br></br>
              &emsp;&emsp;&emsp;React, <br></br>
              &emsp;&emsp;&emsp;Node, <br></br>
              &emsp;&emsp;&emsp;Express, <br></br>
              &emsp;&emsp;&emsp;Mongoose <br></br>
              &emsp;&emsp;<em className="purple bioMobileText">]</em> , <br></br>
              &emsp;&emsp;<em className="orange bioMobileText">databases</em> : <em className="purple bioMobileText"> [ </em><br></br>
              &emsp;&emsp;&emsp;MongoDB, <br></br>
              &emsp;&emsp;&emsp;MySQL <br></br>
              &emsp;&emsp;<em className="purple bioMobileText">]</em><br></br>
              &emsp;<em className="purple bioMobileText">)</em><br></br>
              <em className="yellow bioMobileText">{"}"}</em>;
            </p>
          </div>
        </div>
    )
}

export default Bio;
