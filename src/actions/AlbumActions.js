import {
  ALBUMS_FETCH,
  ALBUMS_SEARCH,
  ALBUM_SAVE,
  ALBUM_REMOVE
} from './types';

export const albumsFetch = () => {
  return {
    type: ALBUMS_FETCH
  };
};

export const albumsSearch = (searchValue) => {
  return {
    type: ALBUMS_SEARCH,
    payload: { searchValue }
  };
};

export const albumSave = ({ id }) => {
  return {
    type: ALBUM_SAVE,
    payload: { id }
  };
};

export const albumRemove = ({ id }) => {
  return {
    type: ALBUM_REMOVE,
    payload: { id }
  };
};
