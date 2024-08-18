import { useCallback, useState } from 'react';
import Add from './calculate.util';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = useCallback(() => {
   console.log('input value', input);
   setError('');
    try {
      const res = Add(input);
      setResult(res);
    } catch (e) {
      setError(e.message);
    }
  }, [input]);

  return (
    <div className="App">
      <div className="calculator">
        <h2>String Calculator</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
        <button onClick={calculate}>Calculate</button>
        {result !== null && <div className="result">Result: {result}</div>}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default App;
