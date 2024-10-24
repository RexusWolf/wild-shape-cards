import './App.css';
import { CardComponent } from './CardComponent';
import { wildShapes } from './wildShapes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cards">
          {wildShapes.map((card) => (
            <CardComponent card={card} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
