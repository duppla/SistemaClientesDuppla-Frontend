import React, { useState } from 'react'

import './../custumer/Navbarcustumer.css'
import { Link } from 'react-router-dom';
import Iperfilnavbar from "../../src/img/Iperfilnavbar.svg";
import Ipagarnavbar from "../../src/img/Ipagarnavbar.svg";
import Ihousenavbar from "../../src/img/Ihousenavbar.svg";
import Ihistorialnavbar from "../../src/img/Ihistorialnavbar.svg";
import Iayudanavbar from "../../src/img/Iayudanavbar.svg";





function Navbarcustumer() {
    return (
        <div className=''>

            {/*<nav className="navbar bg-body-tertiary fixed-bottom">
                <div className="container-fluid">
                    <button className=" btn-nav-custumer " type="" data-bs-toggle="" data-bs-target="" >
                        <Link to="/profile">
                            <img src={Iperfilnavbar} className="navbar-toggler " alt="" />
                        </Link>
                    </button>
                    <button className=" btn icon-navbar-custumer" type="button" data-bs-toggle="" data-bs-target="" >
                        <Link to="/profile">
                            <img src={Ipagarnavbar} className="navbar-toggler " alt="" />
                        </Link>
                    </button>
                    <button className=" btn icon-navbar-custumer" type="button" data-bs-toggle="" data-bs-target="" >
                        <Link to="/profile">
                            <img src={Ihousenavbar} className="navbar-toggler " alt="" />
                        </Link>
                    </button>
                    <button className=" btn icon-navbar-custumer" type="button" data-bs-toggle="" data-bs-target="" >
                        <Link to="/profile">
                            <img src={Ihistorialnavbar} className="navbar-toggler " alt="" />
                        </Link>
                    </button>
                    <button className=" btn icon-navbar-custumer" type="button" data-bs-toggle="" data-bs-target="" >
                        <Link to="/profile">
                            <img src={Iayudanavbar} className="navbar-toggler " alt="" />
                        </Link>
                    </button>






                </div>
    </nav>*/}

            <ul className="nav justify-content-center fixed-bottom " >
                <li clasNames="nav-item nav-space-icon">
                    <img src={Iperfilnavbar} className=" nav-space-icon" alt="" />

                </li>
                <li className="nav-item">
                    <img src={Ipagarnavbar} className="nav-space-icon" alt="" />

                </li>
                <li className="">
                    <img src={Ihousenavbar} className="nav-house " alt="" />
                </li>
                <li className="nav-item">
                    <img src={Ihistorialnavbar} className="nav-space-icon" alt="" />
                </li>
                <li className="nav-item">
                    <img src={Iayudanavbar} className="nav-space-icon" alt="" />
                </li>
            </ul>

        </div>
    )
}

export default Navbarcustumer;