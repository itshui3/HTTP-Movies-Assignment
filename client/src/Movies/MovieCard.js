import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import { connect } from 'react-redux'

const MovieCard = props => {
  const history = useHistory()
  const { title, director, metascore, stars } = props.movie

  console.log(props.movies)
  // if it's at base url it is '/'
  // if it's at a selection, it is '/movies/:id'

  const path = history.location.pathname.toString()

  // const title = ''
  // const director = ''
  // const metascore = ''
  // const stars = []

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
  )
};

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies
  }
}


export default connect(mapStateToProps)(MovieCard)