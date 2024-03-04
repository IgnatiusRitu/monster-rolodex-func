import { useState, useEffect } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
