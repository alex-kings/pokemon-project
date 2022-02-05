import Team from "./components/Team";
import "./styles/pokemon.css";

function App() {
  return (
    <div className="App">
      <Team ids={[1, 2, 3, 4, 5]} />
    </div>
  );
}

export default App;
