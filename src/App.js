import React, { useState } from 'react'; // Import useState from react
import CommissionForm from './components/CommissionForm';
import PolicyForm from './components/PolicyForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css'; // Import the CSS file

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>Insurance Service</h1>
      <CommissionForm setResult={setResult} />
      <PolicyForm setResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
