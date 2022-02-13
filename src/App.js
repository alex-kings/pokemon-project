import Team from "./components/Team";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

import "./styles/pokemon.css";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <SearchBar
        setTeam={(t) => {
          setTeam(t);
        }}
      />
      <Team team={team} />
    </div>
  );
}

export default App;
