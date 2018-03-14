import React, { Component } from 'react';
import NavHeader from '../../components/layout/NavHeader';
import NavFooter from '../../components/layout/NavFooter';
import SideNavBar from '../../components/layout/SideNavBar';

class Layout extends Component {

    render() {

        return (

            //Cria uma layout que possui header, footer e navegação lateral.
            <div className="_layout">
                <div className="navigation">
                    <SideNavBar />
                </div>
                <div className="ft-hd">
                    <NavHeader />
                    <NavFooter />
                </div>
            </div>
        );
    }
}

export default Layout;
