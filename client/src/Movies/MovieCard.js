import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import { connect } from 'react-redux'

const MovieCard = props => {
  const history = useHistory()
  const [movie, setMovie] = useState({})
  const { title, director, metascore, stars } = movie


  console.log(history.location.pathname)

  const path = history.location.pathname.toString()
  useEffect(() => {
    Axios.get(`http://localhost:5000/api${path}`)
      .then( res => {
        console.log(res)
        setMovie(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars && stars.map((star, index) => (
        <div key={index} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {

  }
}


export default connect(mapStateToProps)(MovieCard)