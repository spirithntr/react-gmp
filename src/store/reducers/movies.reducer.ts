import { State, Movie, SearchTabs, SortTabs } from '../../models/movies';
import { ACTIONS } from '../actions/actions';

const initialState: State = {
  movies: [] as Movie[],
  searchTab: SearchTabs.title,
  sortTab: SortTabs.release,
  selectedMovie: null,
  search: ''
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
    case ACTIONS.SWITCH_SEARCH_TAB:
      state = {
        ...state,
        searchTab: payload
      }
    default:
      break;
  }
  return state;
};
