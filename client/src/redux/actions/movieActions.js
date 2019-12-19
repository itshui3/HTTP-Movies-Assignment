import Axios from 'axios'

export const FETCHING_MOVIES = 'FETCHING_MOVIES'
export const FETCHED_MOVIES = 'FETCHED_MOVIES'
export const FETCH_FAILED = 'FETCH_FAILED'

export const ADD_SAVED = 'ADD_SAVED'

export const UPDATING_MOVIE = 'UPDATING_MOVIE'
export const UPDATED_MOVIE = 'UPDATED_MOVIE'
export const FAILED_UPDATE_MOVIE = 'FAILED_UPDATE_MOVIE'

export const SET_MOVIE = 'SET_MOVIE'
export const DELETING_MOVIE = 'DELETING_MOVIE'
export const DELETION_ERROR = 'DELETION_ERROR'

export const getMovies = () => dispatch => {
  dispatch({ type: FETCHING_MOVIES })

  Axios.get("http://localhost:5000/api/movies")
  .then(res => {
    console.log(res)
    dispatch({ type: FETCHED_MOVIES, payload: res.data })
  })
  .catch( err => {
    console.log(err)
    dispatch({ type: FETCH_FAILED, payload: err })
  })
}

export const putUpdatedMovie = (id, movie) => dispatch => {
  dispatch({ type: UPDATING_MOVIE })
  Axios.put(`http://localhost:5000/api/movies/${id}`, movie)
    .then( res => {
      console.log(res)
      dispatch({ type: UPDATED_MOVIE, payload: res.data })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_UPDATE_MOVIE, payload: err })
    })
}

export const deleteMovie = (id) => dispatch => {
  dispatch({ type: DELETING_MOVIE })
  Axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then( res => {
      console.log(res)

    })
    .catch( err => {
      console.log(err)
      dispatch({ type: DELETION_ERROR, payload: err})
    })
}

export const setMovie = (id) => {
  return {
    type: SET_MOVIE,
    payload: id
  }
}

export const addSaved = (movie) => {
  return {
    type: ADD_SAVED,
    payload: movie
  }
}

