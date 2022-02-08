import React from "react";

function Projects() {
  return (
    <section className="projects">
        <div className="container">
            <div className="row">                
                <div className="col-12 col-xs-12">
                    <h2 className="txt-orange">Projects</h2>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/chatapp.png" alt="Chat App" />
                            </div>
                            <h2 className="txt-orange">Chat App</h2>
                            <p className="txt-white fs-18">Node JS, Express JS, React JS, Socket.IO</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/Chat-App.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/todoreactjs.png" alt="To Do List" />
                            </div>
                            <h2 className="txt-orange">Todo App ReactJS</h2>
                            <p className="txt-white fs-18">React JS, SCSS</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/to-do-app-react.js.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/restaurantapp.png" alt="Restaurant App" />
                            </div>
                            <h2 className="txt-orange">Restaurant App</h2>
                            <p className="txt-white fs-18">Vue JS, Axios, Bootstrap</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/restaurant-app-vue.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/pokemonapp.png" alt="Pokemon App" />
                            </div>
                            <h2 className="txt-orange">Pokemon App</h2>
                            <p className="txt-white fs-18">React JS, Redux, SCSS, Poke API</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/pokemon-app.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
  );
}

export default Projects;
