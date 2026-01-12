
import './App.css';
import NavBar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Searchbar from './Components/Searchbar';
import Footer from './Components/Footer';
import Movie_Profile from './Pages/Movie_Profile';
import Results from './Pages/Results'
//npm start on terminal to run

function App() {

  return (
    
    <Router>
      <>
      <NavBar/>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Movie_Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/results' element={<Results />} />
        </Routes>
    <Footer/>
      </>

    

    </Router>
      
     
    
  );
}

export default App;
