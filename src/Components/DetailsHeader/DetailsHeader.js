import React from 'react';
import detailsHeader from '../../Images/DetailsHeader.png'
import './DetailsHeader.css'

const Detailsheader = (props) => {
    const logo = props.logo;

    return (
        <div className="detailscontainer">
             <img src={detailsHeader} alt="" className="firstImg"></img>
             <div className="logocenter"> 
             {
                 logo && <img src={logo} alt="" className="secondImg"></img>
             } 
             </div>
        </div>
    );
};

export default Detailsheader;
