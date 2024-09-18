import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CharacterPage from './Pages/CharacterPage';
import NotFound from './pages/NotFound.Jsx';
import EpisodesPage from './pages/episodesPage';


function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterPage/>} />
          <Route path="/episodios" element={<EpisodesPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
      </div>

  );
}

export default App
