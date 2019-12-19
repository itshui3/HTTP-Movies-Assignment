import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieForm from './Movies/MovieForm'

const App = (props) => {
  return (
    <>
      <SavedList />

      <Route exact path="/" component={MovieList} />

      <Route
        path="/movies/:id"
        component={Movie}
      />

      <Route
        path='/update-movie/:id'
        component={MovieForm}
      />

    </>
  );
};

export default App
