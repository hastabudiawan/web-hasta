import React from "react";

function Projects() {
  return (
    <section className="projects">
        <div className="container">
            <div className="row">                
                <div className="col-12 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <h2 className="txt-orange">Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xs-12">
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
                <div className="col-12 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/todolist.png" alt="To Do List" />
                            </div>
                            <h2 className="txt-orange">To Do List</h2>
                            <p className="txt-white fs-18">Laravel 8, Mysql, and Vue JS</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/todolist-laravel-vue.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body">
                            <div className="image">
                                <img className="projects-image" src="img/contactapp.png" alt="Contact App" />
                            </div>
                            <h2 className="txt-orange">Contact App</h2>
                            <p className="txt-white fs-18">Node JS, Express JS</p>
                            <a className="btn fs-18" href="https://github.com/hastabudiawan/Contact-App-Nodejs.git" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
  );
}

export default Projects;