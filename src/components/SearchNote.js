import React from "react";

const SearchNote = ({ handleChange }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default SearchNote;
