import "./SongCard.scss";
import React from 'react';


function SongCard(props) {
    return (
<div id='SongCardBody'>

<div className='cards'>

  <div className='card'>
    <h2><a href="#0">Song 1 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

  <div className='card'>
    <h2><a href="#0">Song 2 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

  <div className='card'>
    <h2><a href="#0">Song 3 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

  <div className='card'>
    <h2><a href="#0">Song 4 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

  <div className='card'>
    <h2><a href="#0">Song 5 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

  <div className='card'>
    <h2><a href="#0">Song 6 Title</a></h2>
    <h4>Artist Name</h4>
    <p>More information on the song</p>
  </div>

</div>

</div>
);
}

export default SongCard;