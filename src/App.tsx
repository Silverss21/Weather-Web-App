import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from './routes/about-us';
import HomePage from './routes/home-page';
import ContactUs from './routes/contact-us';
import Settings from './routes/settings';

if (!localStorage.getItem('cities')) {
  localStorage.setItem('cities', JSON.stringify([]));
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cityName" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
