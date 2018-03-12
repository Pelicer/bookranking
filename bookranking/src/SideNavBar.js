import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from './image/side-nav/home.png';
import list from './image/side-nav/list.png';
import register from './image/side-nav/register.png';
import './css/SideNavBar.css'
import * as utils from './scripts/utils.js'; 

const SideNavBar = () => (    
    <Router>
        <div>
            <span className="spanOpen" onClick={utils.openNav()}>&#9776;</span>
            <div className="sidenav">
                <a className='closebtn' onClick={utils.closeNav()}>&times;</a>
                <ul>
                    <li>
                        <Link to="/"><img src={home} alt='Home' /> <a>Home</a></Link>
                    </li>
                    <li>
                        <Link to="/list"><img src={list} alt='Series registered' /> <a>Series Registered</a></Link>
                    </li>
                    <li>
                        <Link to="/register"><img src={register} alt='Register series' /> <a>Register series</a></Link>
                    </li>
                </ul>

                <div className='sidenav-footer'>
                    <hr />

                    <small>Pelicer &copy; 2018</small>
                </div>

                {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}
            </div>
            
        </div>
    </Router>
);

// const Home = () => (
// );

// const About = () => (
// );

// const Topics = ({ match }) => (
        
// );

// const Topic = ({ match }) => (
// );

export default SideNavBar;