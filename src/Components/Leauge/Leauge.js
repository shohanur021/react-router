import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './leauge.css'

const Leauge = (props) => {
    const {idLeague,strLeague,strSport} = props.leauge;
    const [leauge,setLeauge]= useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeauge(data.leagues[0]))
    },[idLeague]);
    // console.log(leauge)
    
    return (
        <div style={{width:"280px",margin:'10px 18px',padding:'5px',borderRadius:'5px',backgroundColor:'white',boxShadow:'2px 2px 1.5px white',textAlign:'center'}}> 
            <img src={leauge?.strLogo} alt="" className="logo"></img>
            <h4>{strLeague}</h4>
            <p>Sport Type: {strSport}</p>
            <Link to={`/leauge/${idLeague}`}><button className="btn-primary">Explore <FontAwesomeIcon icon={faArrowRight}/></button></Link>
        </div>
    );
};

export default Leauge;