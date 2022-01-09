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
                                    <p className="txt-white fs-18">My name is Hasta Budiawan (he/him). My hometown is Tangerang, where I was born and reared. I began learning HTML, CSS, and Javascript in 2014, which marked the beginning of my programming career. My major programming languages are PHP and Javascript, though I also use Laravel, Node JS, Vue JS, and React JS as libraries and frameworks.</p>
                                </div>
                                <div className="skills">
                                    <h2 className="txt-orange">Skills</h2>
                                    <ul className="skills-set txt-white fs-18">
                                        <li>Backend: PHP, Node JS, Laravel</li>
                                        <li>Frontend: Javascript, React JS, Vue JS, Bootstrap</li>
                                        <li>Database: MySQL</li>
                                        <li>Version Control: GIT</li>
                                        <li>Software: Postman, Visual Studio Code</li>
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
                                        <a className="txt-white fs-18" href="mailto:hastabudiawan8@gmail.com" target="_blank" rel="noopener noreferrer">
                                            hastabudiawan8@gmail.com
                                        </a>
                                        <a className="txt-white fs-18" href="https://github.com/hastabudiawan" target="_blank" rel="noopener noreferrer">
                                            Github/hastabudiawan
                                        </a>
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