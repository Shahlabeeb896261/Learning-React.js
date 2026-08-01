import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if(count > 99) return;
    setCount(count + 1);
  }

  const removeValue = () => {
    if(count < 1) return;
    setCount(count - 1);
  }

  return (
    <>
      <div className="container">
        <h1>The Counter Value is {count}</h1>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
