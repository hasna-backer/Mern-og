import heroImg from './assets/hero.png'
import './App.css'

import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h1>Signup</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default App