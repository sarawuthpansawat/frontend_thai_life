import React, { useState } from 'react';
import axios from 'axios';
import './PolicyForm.css';

const PolicyForm = ({ setResult }) => {
  const [messageId, setMessageId] = useState('1');
  const [sentDateTime, setSentDateTime] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [insureName, setInsureName] = useState('นายA1');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/policies/getPolicy', {
        headerData: {
          messageId,
          sentDateTime,
          insureName,
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching policy information:', error);
      setResult({ error: error.response.data });
    }
  };

  return (
    <div>
      <h2>Policy Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Message ID:
            <input type="text" value={messageId} onChange={(e) => setMessageId(e.target.value)} />
          </label>
          <label>
            Sent DateTime:
            <input type="text" value={sentDateTime} onChange={(e) => setSentDateTime(e.target.value)} />
          </label>
          <label>
            Insure Name:
            <input type="text" value={insureName} onChange={(e) => setInsureName(e.target.value)} />
          </label>
        </div>
        <button type="submit">Get Policy Information</button>
      </form>
    </div>
  );
};

export default PolicyForm;
