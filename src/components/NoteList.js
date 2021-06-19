import { useDispatch } from "react-redux";
import { deleteNotes } from "../redux/notesSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import NoteModal from "./NoteModal";
import { useState } from "react";

const NoteList = ({ id, title, date }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(
      deleteNotes({
        id: id,
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
        <small>{date}</small>
        <AiFillEdit
          className="edit-icon"
          size="1.5rem"
          color="green"
          onClick={() => {
            setShowModal(!showModal);
          }}
        />
      </div>

      <NoteModal
        key={id}
        id={id}
        title={title}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default NoteList;
