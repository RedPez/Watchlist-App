import { useState } from 'react'
import Homepage from './pages/Homepage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <p className="read-the-docs">
        App test
      </p>
      <Homepage/>
    </>
  )
}

export default App


