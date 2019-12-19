import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { putUpdatedMovie } from '../redux/actions'

function MovieForm(props) {

  const [movie, setMovie] = useState({
    id: 0, // try putting with my own id
    title: '',
    director: '',
    metascore: 0,
    stars: []
  })

  const fetchMovies = () => {
    Axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const [star, setStar] = useState('')

  const handleStarName = ev => {
    setStar(ev.target.value)
  }

  const handleNewStar = ev => {
    ev.preventDefault()
    setMovie({ ...movie, stars: [...movie.stars, star]})
    setStar('')
  }

  const handleUpdateMovie = ev => {
    setMovie({
      ...movie,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    props.putUpdatedMovie(props.match.params.id, movie)
    // Post Updated Movie needs to update as well
    props.history.push(`/movies/${props.match.params.id}`)
  }

  return (
    <>
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>

      <div className='movieForm__cont'>
        <form onSubmit={handleSubmit}>
          <input
            name='title'
            placeholder='title'
            value={movie.title}
            onChange={handleUpdateMovie}
          />
          <input 
            name='director'
            placeholder='director'
            value={movie.director}
            onChange={handleUpdateMovie}
          />
          <input 
            name='metascore'
            type='number'
            placeholder='metascore'
            value={movie.metascore}
            onChange={handleUpdateMovie}
          />
          <button type='submit'>Submit Changes</button>

        </form>
        <form onSubmit={handleNewStar}>
          <input
            placeholder='name'
            value={star}
            onChange={handleStarName}
          />
          <button type='submit'>New Star</button>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  putUpdatedMovie
})(MovieForm);