import React from "react";
import { useSelector } from "react-redux";
import AddNewNotes from "./AddNewNotes";
import NoteList from "./NoteList";

const NoteItem = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <NoteList
            key={note.id}
            id={note.id}
            title={note.title}
            isEdit={note.isEdit}
          />
        );
      })}
      <AddNewNotes />
    </div>
  );
};

export default NoteItem;
