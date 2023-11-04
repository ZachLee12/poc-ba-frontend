import { useState, Fragment } from 'react'
import TokenForm from './components/TokenForm/TokenForm'
import './App.css'
import TokenStore from './components/TokenStore/TokenStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="App">
      <TokenForm />

      <TokenStore />
    </div>
  )
}

export default App
