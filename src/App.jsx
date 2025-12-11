import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [data] = useState(()=> expensiveFunction());

   function expensiveFunction(){
       JSON.parse(localStorage.getItem("data"));
    }
  
  return (
    
    <div>
          <h1>Lazy Initialization</h1>
    </div>
     
  )
}
export default App
