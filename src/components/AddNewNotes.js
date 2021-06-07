import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "../redux/notesSlice";

const AddNewNotes = () => {
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();

  const stat = useSelector((state) => state.notes);

  console.log(stat);

  const handleChange = (e) => {
    setNotes(e.target.value);
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

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(stat));
  }, [stat]);

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
      <div className="note-footer">
        <button onClick={handleSubmit} className="save">
          save
        </button>
      </div>
    </div>
  );
};

export default AddNewNotes;
