// src/App.jsx
import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchActive = prevSearchTerm !== '';


  useEffect(() => {
    async function getStarships() {
      setLoading(true);
      setError('');
      try {
        const ships = await fetch();
        setStarshipsData(ships);
        setDisplayedStarships(ships);
      } catch (err) {
        setError('API error: Unable to load starships.');
      } finally {
        setLoading(false);
      }
    }
    getStarships();
  }, []);

  const handleSearch = (term) => {
    if (term.trim() === '') return;
    const filtered = starshipsData.filter(ship =>
      ship.name.toLowerCase().includes(term.toLowerCase())
    );
    setDisplayedStarships(filtered);
    setPrevSearchTerm(term);
  };


  const handleReset = () => {
    setDisplayedStarships(starshipsData);
    setPrevSearchTerm('');
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} onReset={handleReset} count={displayedStarships.length} prevSearchTerm={prevSearchTerm}
       searchActive={searchActive}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p >{error}</p>
      ) : (
        <StarshipList starships={displayedStarships} />
      )}
    </main>
  );
};


export default App;