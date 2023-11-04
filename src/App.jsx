import { useState, Fragment } from 'react'
import TokenForm from './components/TokenForm/TokenForm'
import TokenStore from './components/TokenStore/TokenStore'
import LoginForm from './components/LoginForm/LoginForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="App">

      <LoginForm />
      <TokenForm />
      <TokenStore />
    </div>
  )
}

export default App
