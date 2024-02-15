import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MyReviews from "./pages/MyReviews";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/myreviews" element={<MyReviews />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
