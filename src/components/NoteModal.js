import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes, deleteNotes } from "../redux/notesSlice";
import { AiFillDelete } from "react-icons/ai";

const NoteModal = ({ showModal, id, title, setShowModal }) => {
  const [editedNotes, setEditedNotes] = useState(title);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEditedNotes(e.target.value);
  };

  const handleDelete = () => {
    dispatch(
      deleteNotes({
        id,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotes({ id: id, title: editedNotes }));
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal" key={id}>
          <div className="note">
            <textarea
              id="textarea"
              rows="8"
              cols="10"
              placeholder="Add a note..."
              value={editedNotes}
              onChange={handleChange}
            ></textarea>
            <div className="note-footer">
              <AiFillDelete
                onClick={handleDelete}
                className="delete-icon"
                size="1.5rem"
                color="red"
              />
              <button onClick={handleSubmit} className="save">
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
