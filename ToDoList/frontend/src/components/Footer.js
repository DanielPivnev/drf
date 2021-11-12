import React from 'react'


const Nav = ({navC}) => {

    return (
        <footer className="bg-light text-center text-lg-start">

            <div className="container p-4">

                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">ToDo‘s</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">ToDo 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">ToDo 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">ToDo 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">ToDo 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Remains</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Remain 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Remain 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Remain 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Remain 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Plans</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Plan 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Plan 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Plan 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Plan 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Requests</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Request 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Request 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Request 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Request 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 footerH">
                © 2021 ToDo List
            </div>
        </footer>
    );
}


export default Nav;
