import logo from './logo.svg';
import './App.css';
import Footer from "./component/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Header from './component/Header'
import Login from './component/Login'
import College from './loginpages/Collegein';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import About from './component/About';
import Indivup from './loginpages/Indivup';
import Companyin from './loginpages/Companyin';
import Indivin from './loginpages/Indivin';
import Explore from './component/Explore';
import Project from './Products/Product';
import Accad from './Products/accadmics';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="upper">
          <Header />
        </div>
        <div className="different">
          <Routes>
          <Route path="/projects" element={<Project/>} />
          <Route path="/accad" element={<Accad/>} />
            
          </Routes>
        </div>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
        <Routes>
          
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="container">
          <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/individualup" element={<Indivup/>} />
          <Route path="/individualin" element={<Indivin/>} />
            <Route path="/college" element={<College/>} />
            <Route path="/company" element={<Companyin/>} />
          </Routes>
        </div>
        <Footer />
        {/* Place the ToastContainer here */}
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
