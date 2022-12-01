import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 className='text-teal-500'>HIHfiag</h2>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
    </div>
  )
}

export default App
