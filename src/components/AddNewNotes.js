import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../redux/notesSlice";

const AddNewNotes = () => {
  const [notes, setNotes] = useState("");
  const characterLimit = 200;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNotes(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNotes({
        title: notes,
      })
    );

    setNotes("");
  };

  const word = characterLimit - notes.length <= 1 ? " word " : " words ";
  return (
    <div className="note new">
      <textarea
        id="textarea"
        onChange={handleChange}
        rows="8"
        cols="10"
        placeholder="Add a note..."
        value={notes}
      ></textarea>
      {notes && (
        <small>
          {characterLimit - notes.length}
          {word}
          Remaining
        </small>
      )}
      <div className="note-footer">
        <button onClick={handleSubmit} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNewNotes;
