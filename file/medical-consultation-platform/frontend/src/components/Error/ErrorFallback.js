import React from 'react';

const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h2>Something went wrong...</h2>
      <p>{error && error.toString()}</p>
      <p>Please refresh the page or try again later.</p>
    </div>
  );
};

export default ErrorFallback;
