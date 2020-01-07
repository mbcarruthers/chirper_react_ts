import * as React from "react";


//TODO: This was copied from another site,
// make it friendly with this site


const NavigationBar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark text-white navbar-expand-sm">
            <a href="/" className="navbar-brand">Chirper</a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item rounded">
                        <a href="/" className="nav-link">link 1</a>
                    </li>
                    <li className="nav-item rounded">
                        <a href="/" className="nav-link">link 2</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default NavigationBar;