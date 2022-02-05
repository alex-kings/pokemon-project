import Team from "./components/Team";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

import "./styles/pokemon.css";

function App() {
  const [team, setTeam] = useState([1, 2, 3]);

  return (
    <div className="App">
      <SearchBar
        setTeam={(myTeam) => {
          setTeam(myTeam);
        }}
      />

      <Team ids={team} />
    </div>
  );
}

export default App;
