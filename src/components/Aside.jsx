
import React from 'react'
import './styles/aside.css'
import { Link, NavLink } from 'react-router-dom'
import naqdyaLogo from '../images/naqdeya_logo-2.png'



export default function Aside() {
    return (
        <div>

            <div className="d-flex  flex-column flex-shrink-0 p-3 text-white  aside">
                <NavLink to="/" className="d-flex align-items-center justify-content-center  text-decoration-none">

                    <img className='w-50' src={naqdyaLogo} alt="" />
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">

                    <li>
                        <NavLink activeclassname='is-active' to="employees" className="nav-link link-light">

                            Employees
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  activeclassname='is-active' to="payments" className="nav-link link-light  " aria-current="page">

                            Payments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='is-active' to="branches" className="nav-link link-light ">

                            Branches
                        </NavLink>
                    </li>


                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Link>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                      
                      
                     
                  
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}




