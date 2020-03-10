import React from 'react';
import '../App.css';
import brittanyHoward from './brittany-howard.jpg'

function Miguel() {
  return (
    <>
      <div style={{background:"gray",
      color: 'white',
      textAlign: 'center'}}>
      <h1>Miguel is cool and likes music!</h1>
      <p>Miguel is really excited to go to a concert this summer. Miguel bought a ticket to go see one of his favorite musical artists, Brittany Howard. Brittany Howard is a grammy-award winning (4 times) artist best known for her time with her band, The Alabama Shakes. Brittany Howard is touring to St. Louis for her newest album, titled 'Jaime'. 'Jaime' is Brittany Howards debut solo album, dedicated to her late older sister. My favorite song off of the album is called 'Short and Sweet', an acoustic ode to a small-but-mighty love.</p>
      <figure>
      <img src={brittanyHoward} alt="A photo of Brittany Howard for her new album Jaime"></img>
      <figcaption>A photo of Brittany Howard for her new album Jaime. Courtesy of <a href="https://www.independent.co.uk/arts-entertainment/music/reviews/brittany-howard-review-jaime-album-sister-alabama-shakes-band-tour-dates-a9112121.html">The Independent</a>.
      </figcaption>
      </figure>
      <figure>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6la6OHxweak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <figcaption>Brittany Howard performing my favorite song, Short and Sweet on The Daily Show. Courtesy of <a href="https://www.youtube.com/watch?v=6la6OHxweak">YouTube</a>.
      </figcaption>
      </figure>
      </div>
    </>
  );
}

export default Miguel;