import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Posts } from "./posts";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>{"This is a test"}</h1>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
