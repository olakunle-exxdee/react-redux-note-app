import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, editNotes } from "../redux/notesSlice";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const NoteList = ({ id, title, isEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteNotes({
        id: id,
      })
    );
  };
  const handleEdit = () => {
    dispatch(
      editNotes({
        id: id,
        isEdit: !isEdit,
      })
    );
  };

  return (
    <div key={id} className="note">
      <p>{title}</p>
      <div className="note-footer">
        <AiFillDelete
          className="delete-icon"
          onClick={handleDelete}
          size="1.5rem"
          color="red"
        />
        <AiOutlineEdit
          onClick={handleEdit}
          className="delete-icon"
          size="1.5rem"
          color="green"
        />
      </div>
    </div>
  );
};

export default NoteList;
