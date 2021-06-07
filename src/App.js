import "./App.css";
import Header from "./components/Header";

import NoteItem from "./components/NoteItem";
import SearchNote from "./components/SearchNote";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchNote />
        <NoteItem />
      </div>
    </div>
  );
}

export default App;
