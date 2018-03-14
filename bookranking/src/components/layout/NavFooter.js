import React, { Component } from 'react';
import facebook from '../../image/sm-icon/white/facebook.png';
import instagram from '../../image/sm-icon/white/instagram.png';
import twitter from '../../image/sm-icon/white/twitter.png';
import '../../css/NavFooter.css';

class NavFooter extends Component {
    render() {
        return (

            < div className="NavFooter" >
                < footer className="section-footer" >
                    <p>
                        Pelicer &copy; 2018 
                    </p>
                    <p>Thanks for being a beta tester!</p>
                    <p className="sm-icons">                       
                       <a href="facebook.com"><img src={facebook} alt='Our Facebook page'/></a>
                       <a href="instagram.com"><img src={instagram} alt='Our Instagram page'/></a>
                       <a href="twitter.com"><img src={twitter} alt='Our Twitter account'/></a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default NavFooter;
