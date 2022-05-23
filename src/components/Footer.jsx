import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <div className="rows d-block mb-0">

                <footer className="text-center text-white bg-dark text-white " >

                    <div className="col-11 bg-dark">

                        <section className="mt-5">

                            <div className="row text-center d-flex justify-content-center pt-5">

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <NavLink to="" className="text-white text-decoration-none">Home</NavLink>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold  ">
                                        <NavLink to="/products" className="text-white text-decoration-none">Products</NavLink>
                                    </h6>
                                </div>



                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold ">
                                        <NavLink to="" className="text-white text-decoration-none" >About</NavLink>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <NavLink to="" className="text-white text-decoration-none">Contact</NavLink>
                                    </h6>
                                </div>

                            </div>

                        </section>


                        <div className="container">
                            <hr />
                        </div>


                        <section className="text-center mb-3 ms-3">
                            <NavLink to="#!" className="text-white me-4">
                                <i className="fa fa-facebook-f"></i>
                            </NavLink>
                            <NavLink to="#!" className="text-white me-4">
                                <i className="fa fa-twitter"></i>
                            </NavLink>
                            <NavLink to="#!" className="text-white me-4">
                                <i className="fa fa-instagram"></i>
                            </NavLink>

                        </section>

                        <div
                            className="text-center p-3 bg-dark ">
                            © 2022 Copyright E-Store
                        </div>

                    </div>


                </footer>

            </div>
        </div>
    );
}

export default Footer;