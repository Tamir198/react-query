import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Posts } from './posts.tsx';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>{'React query'}</h1>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
