import React from "react";

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xs-12">
                        <div className="browser">
                            <div className="browser-header">
                                <i></i><i></i><i></i>
                            </div>
                            <div className="browser-body">
                                <div className="about-me">
                                    <h2 className="txt-orange">About</h2>
                                    <p className="txt-white fs-18">My name is Hasta Budiawan (he/him). I'm a graduate of Informatics Engineering. Skilled in Javascript and various frameworks or libraries. I can make responsive websites, develop frontend like slicing design to code and integrate it with the backend.</p>
                                </div>
                                <div className="skills">
                                    <h2 className="txt-orange">Skills</h2>
                                    <ul className="skills-set txt-white fs-18">
                                        <li>Programming Language : HTML5, CSS3, Javascript</li>
                                        <li>Framework : React JS, Vue JS, Typescript, jQuery, Bootstrap, Tailwind CSS</li>
                                        <li>Database: MySQL</li>
                                        <li>Version Control: GIT</li>
                                    </ul>
                                </div>
                                <div className="education">
                                    <h2 className="txt-orange">Education</h2>
                                    <p className="txt-white fs-18">2016 - 2020</p>
                                    <p className="txt-white fs-18">Buddhi Dharma University</p>
                                    <p className="txt-white fs-18">Computer Science</p>
                                    <p className="txt-white fs-18">GPA 3.38</p>
                                </div>                            
                                <div className="contact">
                                    <h2 className="txt-orange">Contact</h2>
                                    <div className="contact-link">
                                        <p><a className="txt-white fs-18" href="mailto:hastabudiawan8@gmail.com" target="_blank" rel="noopener noreferrer">
                                            hastabudiawan8@gmail.com
                                        </a></p>
                                        <p><a className="txt-white fs-18" href="https://github.com/hastabudiawan" target="_blank" rel="noopener noreferrer">
                                            Github/hastabudiawan
                                        </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    );
}
  
export default About;
