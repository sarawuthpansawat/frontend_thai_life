import React, { useState } from 'react';
import axios from 'axios';
import './CommissionForm.css';

const CommissionForm = ({ setResult }) => {
  const [year, setYear] = useState(1);
  const [age, setAge] = useState(0);
  const [annual, setAnnual] = useState(true);

  const handleCommissionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-thai-life.onrender.com/api/commissions/commissionRate', { year, age });
      //const response = await axios.post('http://localhost:3001/api/commissions/commissionRate', { year, age });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching commission rate:', error);
      setResult({ error: error.response.data });
    }
  };

  const handleOverridingSubmit = async (e) => {
    e.preventDefault();
    try {
      
      //const response = await axios.post('http://localhost:3001/api/commissions/overridingRate', { annual, age });
      const response = await axios.post('https://backend-thai-life.onrender.com/api/commissions/overridingRate', { annual, age });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching overriding rate:', error);
      setResult({ error: error.response.data });
    }
  };

  return (
    <div>
      <h2>Commission Rate</h2>
      <form onSubmit={handleCommissionSubmit}>
        <div className="form-group">
          <label>
            Year:
            <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
          </label>
       
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
          </label>
        </div>
        <button type="submit">Get Commission Rate</button>
      </form>

      <h2>Overriding Rate</h2>
      <form onSubmit={handleOverridingSubmit}>
        <div >
          <label>
            Annual:
            <input type="checkbox" checked={annual} onChange={(e) => setAnnual(e.target.checked)} />
          </label>
        </div>
        <div >
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
          </label>
        </div>
        <button type="submit">Get Overriding Rate</button>
      </form>
    </div>
  );
};

export default CommissionForm;
