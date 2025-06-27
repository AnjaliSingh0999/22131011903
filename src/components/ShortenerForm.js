 





import { useState } from 'react';
	import { logEvent } from "../LoggingMiddleware/logger";



function ShortenerForm({ onShorten }) {
  const [inputs, setInputs] = useState([{ url: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = () => {
    const valid = inputs.filter(i => isValidURL(i.url));
    if (!valid.length) {
      alert("Invalid URLs!");
      logEvent("error", "Attempted shortening invalid URLs");
      return;
    }
    logEvent("shorten", "Shortening new URLs", { count: valid.length });
    onShorten(valid);
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      marginBottom: '20px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Shorten URLs</h2>
      {inputs.map((input, i) => (
        <div key={i} style={{
          background: 'white',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          marginBottom: '15px'
        }}>
          <input
            placeholder="Original URL"
            value={input.url}
            onChange={(e) => handleChange(i, 'url', e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Validity (minutes)"
            type="number"
            value={input.validity}
            onChange={(e) => handleChange(i, 'validity', e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Custom Shortcode"
            value={input.shortcode}
            onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
            style={inputStyle}
          />
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          onClick={() => inputs.length < 5 && setInputs([...inputs, { url: '', validity: '', shortcode: '' }])}
          style={buttonStyle}
        >Add</button>
        <button onClick={handleSubmit} style={buttonStyle}>Shorten</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  margin: '5px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '14px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default ShortenerForm;
