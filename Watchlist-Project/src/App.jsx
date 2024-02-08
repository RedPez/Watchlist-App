import { useState } from 'react'
import Homepage from './pages/Homepage'
import WatchList from './pages/WatchList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
      </p>
      <Homepage/>
      <WatchList />
    </>
  )
}

export default App


