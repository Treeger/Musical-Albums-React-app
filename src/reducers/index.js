import { combineReducers } from 'redux';
import AlbumReducer from './AlbumReducer';

export default combineReducers({
  albums: AlbumReducer,
});
