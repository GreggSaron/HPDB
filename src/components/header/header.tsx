import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './header.css'
import DeathlyHallowsIcon from '../../assets/DeathlyHallows-icon.svg'

const Header = () => {
    return (
        <React.Fragment>           
            <div className="header">        
                <div className="header-left">
                    <img src={DeathlyHallowsIcon} className="icon" />
                    <Link to={`/`} className="tab title">HPDB</Link>
                </div>
                <nav className="header-nav">
                    <Link to={`/wiki`} className="tab">Wiki</Link>
                    <Link to={`/wiki`} className="tab">Tab</Link>
                    <Link to={`/wiki`} className="tab">Tab</Link>
                </nav>
            </div>
            <Outlet />
        </React.Fragment> 
    )
};


export default Header;