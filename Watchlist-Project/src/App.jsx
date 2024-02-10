import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage'
import MyReviews from './pages/MyReviews'
import WatchList from './pages/WatchList';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/> 
          <Route path='MyReviews' element={<MyReviews />}/> 
          <Route path='Watchlist' element={<WatchList />}/> 
          
      </Routes> 
      </Router>
    </>
  )
}

export default App


