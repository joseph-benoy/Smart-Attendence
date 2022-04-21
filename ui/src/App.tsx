import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './elements/ProtectedRoute';
import Admin from './pages/Admin';
import Attend from './pages/Attend';
import Home from './pages/Home';
import Register from './pages/Register';
import Student from './pages/Student';
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
          <Route path="/student" element={<ProtectedRoute type="student" component={<Student/>}/>}></Route>
          <Route path="/join/:sessionId" element={<ProtectedRoute type="student" component={<Attend/>}/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
