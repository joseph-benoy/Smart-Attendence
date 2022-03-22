import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './elements/ProtectedRoute';
import Home from './pages/Home';
import Register from './pages/Register';
import history from './utils/history';
function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<ProtectedRoute component={<Register/>}/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
