import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <nav>
            <div className='logo'>My Website</div>
            <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
          </nav>
        </header>
        <section>
          <h1>It's Umesh Website</h1>
          <p>This design adopts that various screen sizes</p>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
    </>
  )
}

export default App
