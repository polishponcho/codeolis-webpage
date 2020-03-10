import React from 'react';
import '../App.css';
import MarmsPic from './MARMS.png';


function Mary() {
  return (
    <>
      <div style={{background: 'linear-gradient(90deg, #003333, #00b3b3)', color: 'white'}}>
      <h1 >MARY!</h1>
      <img src={MarmsPic} alt="MARMS"></img>
      <p>Hey, y'all!</p>
      <p>(✿◕︿◕) 乁༼☯‿☯✿༽ㄏ (◕︿◕✿)</p>
      <p><a style={{color: '#80ffff'}} href="https://www.youtube.com/watch?v=KGBv8oT5lwk">Click Here</a> for important content. It will improve yor life.</p>
      </div>
    </>
  );
}

export default Mary;