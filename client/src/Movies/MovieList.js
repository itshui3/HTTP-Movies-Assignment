import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getMovies, setMovie } from '../redux/actions'
class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    console.log(this.props.movies)
    return (
      <div className="movie-list">
        {this.props.movies.map(movie => (
          <MovieDetails 
            key={movie.id} 
            index={movie.id} 
            movie={movie} 

          />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link 
    to={`/movies/${movie.id}`}
    >
      <MovieCard movie={movie} />
    </Link>
  );
}

const mapStateToProps = state => {

  return {
    movies: state.moviesReducer.movies
  }
}

export default connect(mapStateToProps, {
  getMovies,
  setMovie
})(MovieList)