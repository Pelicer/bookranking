import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import home from '../../image/side-nav/home.png';
import list from '../../image/side-nav/list.png';
import '../../css/SideNavBar.css'
import * as utils from '../../scripts/utils.js'; 

const SideNavBar = () =>{
    return(
        <Router>
            <div>
                <span className="spanOpen" onClick={utils.openNav()}>&#9776;</span>
                <div className="sidenav">
                    <a className='closebtn' onClick={utils.closeNav()}>&times;</a>
                    <ul>
                        <li>
                            <Link to='/'><img src={home} alt='Home' /><span className='h-item'>Home</span></Link>
                        </li>
                        <li>
                            <Link to='/books'><img src={list} alt='Books' /><span className='b-item'>Books</span></Link>
                        </li>
                    </ul>
                    <div className='sidenav-footer'>
                        <hr />
                        <small>Pelicer &copy; 2018</small>
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default SideNavBar;