import React, { Component } from 'react';
import crown from './image/crown.png';
import './css/NavHeader.css';

class NavHeader extends Component {
    render() {
        return (

            < div className="NavHeader" >
                < header className="section-header" >
                    <img src={crown} className="NavHeader-logo" alt="logo" />
                    <h1 className="NavHeader-title">Which A Song of Ice and Fire book is your favourite?</h1>
                </header>
            </div>
        );
    }
}

export default NavHeader;
