import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<UserDashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
