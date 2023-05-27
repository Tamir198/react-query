import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Posts } from './posts.tsx';
import { useState } from 'react';

const queryClient = new QueryClient();
function App() {
  const [displayPosts, setDisplayPosts] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setDisplayPosts(!displayPosts)}>
        TOGGLE POST
      </button>

      {displayPosts ? <Posts /> : <h1>Nothing to show</h1>}
    </QueryClientProvider>
  );
}

export default App;
