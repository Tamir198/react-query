import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

import Posts from './Posts.tsx';
import MutationCounter from './MutationCounter.tsx';

const queryClient = new QueryClient();

function App() {
  const [displayPosts, setDisplayPosts] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setDisplayPosts(!displayPosts)}>
        TOGGLE Examples
      </button>

      {displayPosts ? <Posts /> : <MutationCounter />}
    </QueryClientProvider>
  );
}

export default App;
