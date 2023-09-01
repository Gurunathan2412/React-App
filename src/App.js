import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
// import Signup from './components/pages/Signup';
import Signup from './components/pages/Signup.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/services' exact  Component={Services}/>
          <Route path='/products' exact  Component={Products}/>
          <Route path='/signup' exact  Component={Signup}/>


        </Routes>
        <Footer />

      </Router>
      {/* <h1>gg</h1> */}
    </div>
  );
}

export default App;
