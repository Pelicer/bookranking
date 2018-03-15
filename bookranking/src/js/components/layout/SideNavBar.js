import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from '../../../view/pages/Home'
import Books from '../../../view/pages/Books'

import home from '../../../image/side-nav/home.png';
import list from '../../../image/side-nav/list.png';
import '../../../css/SideNavBar.css'
import * as utils from '../../../scripts/utils'; 

class  SideNavBar extends React.Component{
    
    render(){
    
        return(
            <Router>
                <div>
                    <div className="sidenav" onMouseEnter={() => utils.openNav()} onMouseLeave={() => utils.closeNav()}>
                        <ul>
                            <li>
                                <Link to='/' ><img src={home} alt='Home' /><span className='h-item'>Home</span></Link>
                            </li>
                            <li>
                                <Link to='books' ><img src={list} alt='Books' /><span className='b-item'>Books</span></Link>
                            </li>
                        </ul>
                    </div>
                    <Route path="/home" component={Home} />
                    <Route path="/" component={Books} />
                </div>
            </Router>

        );
    }
}
export default SideNavBar;