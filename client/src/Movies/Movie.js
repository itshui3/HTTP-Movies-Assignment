import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
// Redux
import { connect } from 'react-redux'
import { setMovie } from '../redux/actions'


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.props.setMovie(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.movies[this.props.match.params.id] !== this.props.movies[this.props.match.params.id]) {
      this.fetchMovie(this.props.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  render() {
    console.log(this.props.movies)
    if (!this.props.setMovie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.props.setMovie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <button 
          className="edit-button" 
          onClick={() => this.props.history.push(`/update-movie/${this.props.match.params.id}`)}
        >
          Edit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    setMovie: state.moviesReducer.setMovie
  }
}

export default connect(mapStateToProps, {
  setMovie
})(Movie)