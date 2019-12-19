import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';

class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.savedMovies.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedMovies: state.moviesReducer.savedMovies
  }
}

export default connect(mapStateToProps)(SavedList)
