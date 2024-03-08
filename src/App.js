import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
         {/* <Route path="/testimonials" component={Testimonials} /> */}
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
