import React from 'react';
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Sidebar = function() {
    return (
        <div className="sidebar">

          {/* Desktop version of icons */}
          <div className="icons">

            {/* LinkedIn */}
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

            {/* Github */}
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

            {/* Resume */}
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



          {/* Mobile version of sidebar */}
          <div className="iconsMobile">

            {/* LinkedIn */}
            <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
              </div>
              <div className="iconpair text-center">
                <a href="https://www.linkedin.com/in/davidtardy/"
                      target="_blank">
                  <h3> linkedin </h3>
                </a>
              </div>
            </div>

            {/* Github */}
            <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                </a>
              </div>
              <div className="iconpair text-center">
                <a href="https://github.com/tardyparty"
                  target="_blank">
                  <h3> github </h3>
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="linkicon">
              <div className="iconpair text-center">
                <a href="https://gdoc.pub/doc/1VcD9YALwryRVHumeN0URlVQ1MKuuWwN3CFqE-Bg5VeM#?usp=sharing"
                  target="_blank">
                  <FontAwesomeIcon icon={faSmile} size="2x"/>
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
    )
}

export default Sidebar;