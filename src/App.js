import "./App.css";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";
import NoteModal from "./components/NoteModal";
import SearchNote from "./components/SearchNote";
import { useDispatch } from "react-redux";
import { clearAllNote } from "./redux/notesSlice";
function App() {
  const dispatch = useDispatch();
  const handleClearAllNote = () => {
    dispatch(clearAllNote());
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchNote />
        <NoteItem />
        <button className="btn1" onClick={handleClearAllNote}>
          clear all
        </button>
        <NoteModal />
      </div>
    </div>
  );
}

export default App;
