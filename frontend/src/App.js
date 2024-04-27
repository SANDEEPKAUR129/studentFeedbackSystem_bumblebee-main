import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
// import Feed from './Feed';
import Feedpage from './feedpage'
import Register from './register';
import Dashboard from './sDashboard';
import Admindashboard from './admin/admindashboard';
import Editprofile from './editprofile';
import CreateEvent from './admin/createEvent';



function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route  path="/feedpage" element= { <Feedpage/>} />
          {/* <Route exact path="/" element= { <home/>} /> */}
          <Route  path="/register" element= { <Register/>} />
          <Route  path="/login" element= { <Login/>} />
          <Route  path="/dashboard" element= { <Dashboard/>} />
          <Route  path="/admin/dashboard" element= { <Admindashboard/>} />
          <Route  path="/editprofile" element= { <Editprofile/>} />
          <Route  path="/admin/createevent" element= { <CreateEvent/>} />
          
        </Routes>
     </div>
     </Router>     

  );
}

export default App;
