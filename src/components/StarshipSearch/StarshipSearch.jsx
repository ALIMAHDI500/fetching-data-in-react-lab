import { useState } from 'react';

const StarshipSearch = ({onSearch,onReset,count,prevSearchTerm,searchActive,}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <section >
      <div>
        <p>
          <strong>
            {prevSearchTerm
              ? `Last Search: ${prevSearchTerm}`
              : 'Search for a starship by name.'}
          </strong>
        </p>
         
      </div>
      <form onSubmit={handleSubmit}>
       <b><label for="searchTerm"> Search Tearm</label></b><input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        {searchActive && (
          <button type="button" onClick={onReset}>
            Show all starships
          </button>
        )}
      </form>
       <p>
          <strong>Number of results:</strong> {count}
        </p>
    </section>
  );
};

export default StarshipSearch;