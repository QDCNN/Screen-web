import { useState } from 'react'
import './App.css'
import { Format1 } from './layout/Format1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Format1 />
    </div>
  )
}

export default App
