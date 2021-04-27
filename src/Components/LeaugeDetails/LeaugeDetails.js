import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import './leaugeDetails.css';
import male from '../../Images/male.png';
import female from '../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'


const LeaugeDetails = () => {
    const {id} = useParams();
    const [leaugeInfo,setLeaugeInfo] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeaugeInfo(data.leagues[0]))
    },[id])
    const {strLeague,intFormedYear,strCountry,strGender,strSport,strDescriptionEN,strDescriptionFR,strLogo} = leaugeInfo;
    // console.log(leaugeInfo);
    const noDescription = <p><small>Sorry, no more description.</small></p>;
    const genderSelect = strGender==="Male" ? male : female;

    return (
        <div>
             <DetailsHeader logo={strLogo}></DetailsHeader>
             <div className="leaugeDetailsCard">
                <div className="cardPic">
                    <div className="firstOne">
                      <h4>{strLeague}</h4>
                      <h6>Founded : {intFormedYear}</h6>
                      <h6>Country : {strCountry}</h6>
                      <h6>Sport Type :  {strSport}</h6>
                      <h6>Gender : {strGender}</h6>
                    </div>
                    <div className="seondOne">
                        <img src={genderSelect} alt=""></img>
                    </div>
                </div>
                <div className="description">
                    {strDescriptionEN ? <p><small>{strDescriptionEN}</small></p> : noDescription}
                    {strDescriptionFR ? <p><small>{strDescriptionFR}</small></p> : noDescription}
                </div>
                <div className="iconsStyle">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="3x" style={{backgroundColor:"white",color:'rgb(43, 69, 100)',borderRadius:'5px'}}/>
                      </a> 
                      <a href="https://twitter.com/link?lang=en" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faTwitter} size="3x" style={{backgroundColor:"#2DA9C8",color:"white",marginLeft:'25px',borderRadius:'5px'}}/>
                     </a>
                     <a href="https://www.youtube.com/watch?v=DNfxdWorwwA" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faYoutubeSquare} size="3x" style={{backgroundColor:"white",color:"red",marginLeft:'25px',borderRadius:'5px'}}/>
                     </a>
                </div>
             </div>
        </div>
    );
}; 

export default LeaugeDetails;