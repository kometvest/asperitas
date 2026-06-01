import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Company from './pages/Company';
import Conservation from './pages/Conservation';
import Farms from './pages/Farms';
import Research from './pages/Research';
import ProjectDetail from './pages/ProjectDetail';
import News from './pages/News';
import Contact from './pages/Contact';
import SpeciesList from './pages/SpeciesList';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="conservation" element={<Conservation />} />
          <Route path="conservation/farms" element={<Farms />} />
          <Route path="species-list" element={<SpeciesList />} />
          <Route path="research" element={<Research />} />
          <Route path="research/project/:id" element={<ProjectDetail />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
