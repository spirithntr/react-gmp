import { State, Movie, SearchTabs, SortTabs } from '../../models/movies';
import { ACTIONS } from '../actions/actions';

export const initialState: State = {
  movies: [] as Movie[],
  searchTab: SearchTabs.title,
  sortTab: SortTabs.release,
  selectedMovie: null,
  search: '',
};

export const movies = (state: State = initialState, { type, payload }: any) => {
  switch (type) {
    case ACTIONS.GET_MOVIES:
      state = {
        ...state,
      };
      break;
    case ACTIONS.GET_MOVIES_SUCCESS:
      state = {
        ...state,
        movies: payload.movies,
      };
      break;
    case ACTIONS.GET_MOVIE:
      state = {
        ...state,
        selectedMovie: payload,
      };
      break;
    case ACTIONS.SWITCH_SEARCH_TAB:
      state = {
        ...state,
        searchTab: payload,
      };
      break;
    case ACTIONS.SWITCH_SORT_TAB:
      state = {
        ...state,
        sortTab: payload,
      };
      break;
    case ACTIONS.SELECT_MOVIE:
      state = {
        ...state,
        selectedMovie: payload,
      };
      break;
    case ACTIONS.RESET_SELECTED_MOVIE:
      state = {
        ...state,
        selectedMovie: null,
        search: ''
      };
      break;
    case ACTIONS.CHANGE_SEARCH_INPUT:
      state = {
        ...state,
        search: payload,
      };
    default:
      break;
  }
  return state;
};
