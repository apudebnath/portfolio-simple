
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Contact from './components/Contact/Contact';
import Navigation from './components/share/Navigation/Navigation';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/share/Footer/Footer';
import Blog from './components/Blog/Blog';



function App() {
  return (
    <div className="m-0 p-0">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="blog" element={<Blog/>}></Route>
          <Route path="projectdetails/:id" element={<ProjectDetails/>}></Route>
        </Routes>
        <Footer></Footer>
    
    </div>
  );
}

export default App;
