import { combineReducers } from 'redux'

import { moviesReducer } from './moviesReducer'

export const reducer = combineReducers({ moviesReducer: moviesReducer })