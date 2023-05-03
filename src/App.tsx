import Navbar from './components/Nav/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery/Gallery';
import GalleryPage1 from './pages/Gallery/GalleryPage1';
import GalleryPage2 from './pages/Gallery/GalleryPage2';
import Schedule from './pages/Schedule/Schedule';
import Monday from './pages/Schedule/Monday';
import Tuesday from './pages/Schedule/Tuesday';
import Wednesday from './pages/Schedule/Wednesday';
import Thursday from './pages/Schedule/Thursday';
import Friday from './pages/Schedule/Friday';
import Saturday from './pages/Schedule/Saturday';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="pricing" element={<Pricing />} />

        <Route path="gallery" element={<Gallery />}>
          <Route path="page-1" element={<GalleryPage1 />} />
          <Route path="page-2" element={<GalleryPage2 />} />
        </Route>

        <Route path="schedule" element={<Schedule />}>
          <Route path="monday" element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
          <Route path="saturday" element={<Saturday />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
