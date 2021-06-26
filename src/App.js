import "./App.css";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearAllNote, fetchNoteDataAsync } from "./redux/notesSlice";
import { sendNoteData } from "./redux/noteActions";

function App() {
  const dispatch = useDispatch();
  const handleClearAllNote = () => {
    dispatch(clearAllNote());
  };
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNoteDataAsync());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(addNotesDataAsync(notes));
  // }, [dispatch, notes]);

  useEffect(() => {
    dispatch(sendNoteData(notes));
  }, [notes, dispatch]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <NoteItem />
        <button className="btn1" onClick={handleClearAllNote}>
          clear all
        </button>
      </div>
    </div>
  );
}

export default App;
