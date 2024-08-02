import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result">
      <h2>Result</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default ResultDisplay;
