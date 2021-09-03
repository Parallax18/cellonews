import React, { Fragment } from 'react';

const Header = props => {
    return (
        <Fragment>
            <div className="main-overlay">
            </div>
            <header className="header-personal">
                <div className="container-xl header-top">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                            {/* site logo */}
                            <a href="personal.html" className="d-block text-logo">Celo News DApp<span className="dot">.</span></a>
                            <span className="slogan d-block">Balance: $ </span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </header>

        </Fragment>
    );

}

export default Header;