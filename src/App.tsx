import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery/Gallery';
import GalleryPage1 from './pages/Gallery/GalleryPage1';
import GalleryPage2 from './pages/Gallery/GalleryPage2';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />}>
          <Route path="page-1" element={<GalleryPage1 />} />
          <Route path="page-2" element={<GalleryPage2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
