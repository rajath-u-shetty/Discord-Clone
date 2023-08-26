import './App.css'
import Header from './components/Header'
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="overflow-hidden" >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Header />} />
          <Route exact path="/channels" element={ <Home /> } />
          <Route exact path='/channels/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
