import './App.css';
import { CardComponent } from './CardComponent';
import { wildShapes } from './wildShapes';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="cards">
          {wildShapes.map((card) => (
            <CardComponent card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
