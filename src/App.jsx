// src/App.jsx
import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const searchActive = prevSearchTerm !== '';

useEffect(() => {

    const fetchDefaultData = async () => {
      try {
      
        const response = await fetch("https://swapi.py4e.com/api/starships/");
        
       
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

      
        const json = await response.json();
        console.log(json.results);
        
       
        setStarshipsData(json.results);
        setDisplayedStarships(json.results);
      } catch (error) {
       
        setError(error.message); 
        console.error("Error fetching data:", error);
      } finally {
      
        setLoading(false);
      }
    };

    fetchDefaultData();
  }, []); 

  const handleSearch = (term) => {
    if (!starshipsData || term.trim() === '') {
      setDisplayedStarships(starshipsData);
      setPrevSearchTerm('');
      return;
    }
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
    <div >
      <div >
        <header>
          <h1 >
            Star Wars API
          </h1>
        </header>
        
        <StarshipSearch
          onSearch={handleSearch}
          onReset={handleReset}
          count={displayedStarships.length}
          prevSearchTerm={prevSearchTerm}
          searchActive={searchActive}
        />
        
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div>
            <p >Error: {error}</p>
          </div>
        ) : (
          <StarshipList starships={displayedStarships} /> 
        )}
      </div>
    </div>
  );
};


export default App;