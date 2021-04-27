import React from 'react';
import headerPic from '../../Images/football-stadium.jpg';
import './Header.css'

const Header = () => {
    return (
        <div  className="Headercontainer">
            <img src={headerPic} alt="" className="headerStyle"></img>
            <h1 className="heading">Sports Trifels</h1>
        </div>
    );
};

export default Header;