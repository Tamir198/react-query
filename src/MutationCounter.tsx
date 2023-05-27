import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const MutationCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCounter((prevCounter) => prevCounter + 5);
  };

  const { mutate, isLoading, isError, isSuccess, error } =
    useMutation(incrementCounter);

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <h1>Use mutation example</h1>
      <p>counter value is {counter}</p>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Loading...</div>}
      {isSuccess && <div>Incremented, total number is {counter}</div>}
      <button onClick={mutate}>Increment total number</button>
    </>
  );
};

export default MutationCounter;
