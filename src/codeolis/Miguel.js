import React from 'react';
import '../App.css';
import brittanyHoward from './brittany-howard.jpg'

function Miguel() {
  return (
    <>
      <h1>Miguel is cool and likes music!</h1>
      <p>"Miguel is really excited to go to a concert this summer. Miguel bought a ticket to go see one of his favorite musical artists, Brittany Howard. Brittany Howard is a grammy-award winning (4 times) artist best known for her time with her band, The Alabama Shakes. Brittany Howard is touring to St. Louis for her newest album, titled 'Jaime'. 'Jaime' is Brittany Howards debut solo album, dedicated to her late older sister. My favorite song off of the album is called 'Short and Sweet', an acoustic ode to a small-but-mighty love."</p>
      <img src={brittanyHoward} alt="A photo of Brittany Howard for her new album Jaime"></img>
    </>
  );
}

export default Miguel;