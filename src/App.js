import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Eagles from './components/Eagles';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eagles' element={<Eagles/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
