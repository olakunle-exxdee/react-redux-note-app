import React from "react";
import { useDispatch } from "react-redux";
import { searchNotes } from "../redux/notesSlice";

const SearchNote = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.value;
    dispatch(
      searchNotes({
        title: name,
      })
    );
  };
  return (
    <div className="search">
      <input onChange={handleChange} type="text" />
    </div>
  );
};

export default SearchNote;
