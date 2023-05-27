import React from 'react';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface QueryData {
  isLoading: boolean;
  isError: boolean;
  data: Post[];
  error?: unknown;
}

export const Posts = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  const {
    isLoading,
    isError,
    data,
    error,
  }: UseQueryResult<AxiosResponse<AxiosError<QueryData>>> = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  async function fetchData(): Promise<Post[]> {
    const posts = await axios.get(apiUrl);
    return posts.data;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error instanceof Error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <ul>
        {data?.map((post: Post) => (
          <li key={post.title}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};
