import React, { useState } from "react";
import { useSelector } from "react-redux";

function NoteModal() {
  const [editedNote, setEditedNote] = useState();
  const state = useSelector((state) => state);
  console.log(state, "state");
  return <div></div>;
}

export default NoteModal;
