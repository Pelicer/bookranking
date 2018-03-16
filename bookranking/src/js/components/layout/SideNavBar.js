import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../../view/pages/Home'
import Books from '../../../view/pages/Books'

import home from '../../../image/side-nav/home.png';
import list from '../../../image/side-nav/list.png';
import left from '../../../image/arrow/left.png';
import '../../../css/SideNavBar.css'
import * as utils from '../../../scripts/utils'; 

class  SideNavBar extends React.Component{    
    render(){    
        return(
            <div>
            <div className="sidenav" onMouseEnter={() => utils.openNav()} onMouseLeave={() => utils.closeNav()}>
                <ul className="routes-list">
                    <li className='li-home' onClick={() => utils.home_selected()}>
                            <Link to='/' ><img src={home} alt='Home' /><span className='h-item'><img src={left} alt='arrow'/></span><span className='h-item'>Home</span></Link>
                    </li>
                    <li className='li-book'onClick={() => utils.book_selected()}>
                            <Link to='books' ><img src={list} alt='Books' /><span className='b-item'><img src={left} alt='arrow' /></span><span className='b-item'>Books</span></Link>
                    </li>
                </ul>
            </div>

                <Route exact path='/' component={Home} />
                <Route path='/books' component={Books}/>

            </div>
        );
    }
}
export default SideNavBar;