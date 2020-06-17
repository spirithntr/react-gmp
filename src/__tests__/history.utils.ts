import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

export const createHistoryProps = (path: string = `/route/:id`) => {
  const history = createMemoryHistory();

  const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: '1' },
  };

  const location = createLocation(match.url);

  return { history, match, location };
};
