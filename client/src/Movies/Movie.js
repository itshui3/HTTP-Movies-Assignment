import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
// Redux
import { connect } from 'react-redux'
import { setMovie, addSaved } from '../redux/actions'


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id)
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

  saveMovie = () => {
    console.log(this.props.movies[this.props.match.params.id])
  }

  render() {
    console.log(this.props.movies)
    if (!this.props.movies) {
      return <div>Loading movie information...</div>;
    }

    const matchId = parseInt(this.props.match.params.id)
    const movie = this.props.movies.find(movie => {
      return movie.id === matchId
    })
    console.log(matchId)
    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
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
    movies: state.moviesReducer.movies
  }
}

export default connect(mapStateToProps, {
  setMovie,
  addSaved
})(Movie)