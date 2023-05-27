import React from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  async function fetchData(): Promise<Post[]> {
    try {
      const posts = await axios.get(apiUrl);
      return posts.data;
    } catch (error) {
      throw error;
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Use query example</h1>
      <ul>
        {data?.map((post: Post) => (
          <li key={post.title}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
