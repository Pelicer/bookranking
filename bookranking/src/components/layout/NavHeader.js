import React, { Component } from 'react';
import crown from '../../image/crown.png';
import '../../css/NavHeader.css';

class NavHeader extends Component {
    render() {
        return (

            < div className="NavHeader" >
                < header className="section-header" >
                    <img src={crown} className="NavHeader-logo" alt="logo" />
                    <h1 className="NavHeader-title">Book Ranking: The world needs to know what's best</h1>
                </header>
            </div>
        );
    }
}

export default NavHeader;
