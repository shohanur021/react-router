import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leauge from '../Leauge/Leauge';
import './home.css'

const Home = () => {
    const [leauges,setLeauges] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeauges(data.leagues))
    },[])
    return (
        <>
            <Header></Header>
            <div className="leauge">
              <h1>Total Leauges : {leauges.length}</h1>
               <div className="showLeauge">
                {
                   leauges.map(le => <Leauge leauge={le} key={le.idLeague}></Leauge>)
                }
               </div>
            </div>
        </>
    );
};

export default Home;