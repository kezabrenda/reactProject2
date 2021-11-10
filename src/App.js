import { Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItineraryPage from './pages/ItineraryPage';
import Navigation from './components/layouts/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itineraries" element={<ItineraryPage />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
