import {
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAILED,
  ALBUMS_SEARCH,
  ALBUM_SAVE,
  ALBUM_REMOVE
} from '../actions/types';

const INITIAL_STATE = {
  albums: [],
  searched: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUMS_FETCH_SUCCESS:
      return { ...state, albums: action.payload };
    case ALBUMS_FETCH_FAILED:
      return { ...state, message: action.payload };
    case ALBUMS_SEARCH:
      return { ...state,
        searched: state.albums.filter(
        album => album.name.includes(action.payload.searchValue)
      ) };
    case ALBUM_SAVE:
      return { ...state,
        albums: state.albums.map(album =>
          album.id === action.payload.id ? { ...album, saved: true } : album) };
    case ALBUM_REMOVE:
      return { ...state,
        albums: state.albums.map(album =>
          album.id === action.payload.id ? { ...album, saved: false } : album) };
    default:
      return state;
  }
};
