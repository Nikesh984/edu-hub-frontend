import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './components/UserDashboard';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          {/* <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<UserDashboard />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// App.js
// import React from 'react';
// import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
// import Dashboard from './pages/Dashboard';
// import './index.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <TopBar />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }

// export default App;

