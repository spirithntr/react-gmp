export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export enum SearchTabs {
  title = 'TITLE',
  genre = 'GENRE',
}

export enum SortTabs {
  release = 'RELEASE DATE',
  rating = 'RATING',
}

export type State = {
  selectedMovie: Movie | null;
  movies: Movie[];
  searchTab: SearchTabs;
  sortTab: SortTabs;
};
