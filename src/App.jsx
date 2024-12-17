import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Villa } from './pages/Villa';
import { Bedrooms } from './pages/Bedrooms';
import { Gallery } from './pages/Gallery';
import { Availability } from './pages/Availability';
import { Contact } from './pages/Contact';
import ReservationPolicy from './pages/ReservationPolicy';
import Mentions from './pages/Mentions';
import NotFound from './pages/NotFound'; // Page 404
import { ScrollToTop } from './components/shared/ScrollToTop';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
  <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/bedrooms" element={<Bedrooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservationpolicy" element={<ReservationPolicy />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="*" element={<NotFound />} /> {/* Route par défaut */}
        </Routes>
        <SpeedInsights />
      </Layout>
    </Router>
  );
}

export default App;