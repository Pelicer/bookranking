import React, { Component } from 'react';
import NavHeader from '../../js/components/layout/NavHeader';
import NavFooter from '../../js/components/layout/NavFooter';
import SideNavBar from '../../js/components/layout/SideNavBar';

class Layout extends Component {

    render() {

        return (

            //Cria uma layout que possui header, footer e navegação lateral.
            <div className="_layout">
                <div className="ft-hd">
                    <NavHeader />
                </div>
                <div className="navigation">
                    <SideNavBar />
                </div>
                <div className="ft-hd">
                    <NavFooter />
                </div>
            </div>
        );
    }
}

export default Layout;
