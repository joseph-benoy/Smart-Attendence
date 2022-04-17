import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './elements/ProtectedRoute';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Register from './pages/Register';
import Teacher from './pages/Teacher';
function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/admin" element={<ProtectedRoute type="admin" component={<Admin/>}/>}></Route>
          <Route path="/teacher" element={<ProtectedRoute type="teacher" component={<Teacher/>}/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
