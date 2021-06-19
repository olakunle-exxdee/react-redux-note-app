import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddNewNotes from "./AddNewNotes";
import NoteList from "./NoteList";
import SearchNote from "./SearchNote";

const NoteItem = () => {
  const [title, setTitle] = useState("");
  const notes = useSelector((state) => state.notes);

  const filteredNote = notes.filter((note) =>
    note.title.toLowerCase().includes(title)
  );

  return (
    <>
      <SearchNote handleChange={setTitle} />
      <div className="notes-list">
        {filteredNote.map((note) => {
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
    </>
  );
};

export default NoteItem;
