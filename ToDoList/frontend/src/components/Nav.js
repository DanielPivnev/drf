import React from 'react'


const Nav = ({navC}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ToDo List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ToDo‘s</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Remains</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Requests</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Nav;
