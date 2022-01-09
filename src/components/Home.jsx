import React from "react";

function Home() {
  return (
    <section className="home">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xs-12">
                    <div className="browser">
                        <div className="browser-header">
                            <i></i><i></i><i></i>
                        </div>
                        <div className="browser-body txt-blue fs-18 line-height">
                            <p>
                                const
                                <span className="txt-white"> name </span>
                                <span className="txt-purple">= </span>
                                <span className="txt-gold">'Hasta Budiawan'</span>
                            </p>
                            <p>
                                const
                                <span className="txt-white"> birthday </span>
                                <span className="txt-purple">= </span>
                                <span className="txt-gold">'27-12-1997'</span>
                            </p>
                            <p>
                                const
                                <span className="txt-white"> gender </span>
                                <span className="txt-purple">= </span>
                                <span className="txt-gold">'male'</span>
                            </p>
                            <p>
                                let
                                <span className="txt-white"> city </span>
                                <span className="txt-purple">= </span>
                                <span className="txt-gold">'Tangerang'</span>
                            </p>
                        </div>
                    </div>                                
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;