import { useState } from 'react';
import './App.css';
import { CardComponent } from './CardComponent';
import { wildShapes } from './wildShapes';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const SearchBar = () => {
    return (
      <input
        className="searchBar"
        autoFocus
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={handleSearch}
      />
    );
  };

  const filteredWildShapes = wildShapes.filter((shape) => shape.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="layout">
      <p>Formas Salvajes</p>
      <SearchBar />
      {filteredWildShapes.length === 0 && <p>No se encontraron resultados</p>}
      <div className="cards">
        {filteredWildShapes.map((card) => (
          <CardComponent card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
