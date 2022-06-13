import React from "react"
import "./index.css"
import HomePage from './vues/HomePage';
import DetailsPage from './vues/DetailsPage'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

export default function App() {
  return (
    <Router>
    
      <main >
      <div className="App">
        <Link to="/"><a class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-home"></span> Home
        </a></Link>
      </div>

        <Routes>

          <Route path="/" name="home" element={<HomePage />}></Route>

          <Route path="/about/:id" name="details" element={<DetailsPage />} ></Route>

        </Routes>
      </main>
    </Router>
  )
}
