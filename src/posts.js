import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Posts = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  async function fetchData() {
    const posts = await axios.get(apiUrl);
    return posts.data;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.title}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};
