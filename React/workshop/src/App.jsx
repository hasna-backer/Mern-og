import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Login</h1>

        <form>
          <input type="email" placeholder="Enter Email" />
          <br />
          <input type="password" placeholder="Enter Password"/>
          <br />
          <button >Login</button>
        </form>
      </div>
    </>
  )
}

export default App
