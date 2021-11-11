import { Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItineraryPage from './pages/ItineraryPage';
import Navigation from './components/layouts/Navigation';
import AddItinerary from './components/AddItinerary';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itineraries" element={<ItineraryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddItinerary />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
