import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoutes from './ProtectedRoutes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />

  
            <Route 
            exact 
            path = "/home"
            element={<ProtectedRoutes><Home/></ProtectedRoutes>}
            />
          
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
