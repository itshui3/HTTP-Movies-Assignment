import {
  FETCHING_MOVIES,
  FETCHED_MOVIES,
  FETCH_FAILED,
  ADD_SAVED,

  UPDATING_MOVIE,
  UPDATED_MOVIE,
  FAILED_UPDATE_MOVIE,

  SET_MOVIE
} from '../actions'

const initialState = {
  movies: [],
  savedMovies: [],
  isFetching: false,
  error: null,

  isUpdating: false,
  updateError: false,

  setMovie: {}
}

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCHING_MOVIES:
      return {
        ...state,
        isFetching: true
      }

    case FETCHED_MOVIES: 
      return {
        ...state,
        isFetching: false,
        movies: payload
      }

    case FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: payload
      }

    case ADD_SAVED:
      return {
        ...state,
        savedMovies: [...state.savedMovies, payload]
      }

    case UPDATING_MOVIE:
      return {
        ...state,
        isUpdating: true
      }
    
    case UPDATED_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload]
      }
    
    case SET_MOVIE:
      return {
        ...state,
        setMovie: state.movies[Number(payload)]
      }

    default:
      return state
  }
}