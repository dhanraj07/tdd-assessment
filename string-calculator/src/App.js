import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const calculate = useCallback(() => {
   // Calculate handler
   console.log('input value', input);
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
      </div>
    </div>
  );
}

export default App;
