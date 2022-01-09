import React from "react";

function NotFound() {
  return (
    <section className="not-found">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body txt-blue fs-18 line-height">
                            <h1 className="txt-orange">404 Not Found</h1>
                        </div>
                    </div>                                
                </div>
            </div>
        </div>
    </section>
  );
}

export default NotFound;