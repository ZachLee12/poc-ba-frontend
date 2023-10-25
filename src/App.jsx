import { useState, Fragment } from 'react'
import TokenForm from './components/TokenForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="App">
      <TokenForm />
    </div>
  )
}

export default App
