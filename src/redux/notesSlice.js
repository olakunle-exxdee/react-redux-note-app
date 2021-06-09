import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "olakunle", isEdit: false },
  { id: 2, title: "saheed", isEdit: false },
  { id: Date.now(), title: "ogunsolu", isEdit: false },
];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    clearAllNote: (state, action) => {
      return (state = []);
    },
    addNotes: (state, action) => {
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        isEdit: false,
      };
      if (newNote.title) {
        state.push(newNote);
      } else {
        console.log("enter value");
      }
    },
    deleteNotes: (state, action) => {
      const filteredNote = state.filter(
        (item) => item.id !== action.payload.id
      );

      return filteredNote;
    },
    searchNotes: (state, action) => {
      const searchNote = state.filter((note) =>
        note.title.toLowerCase().includes(action.payload.title)
      );
      return searchNote;
    },
    editNotes: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      console.log(index);
      console.log(state[index].title);

      const updateNote = {
        id: state[index].id,
        title: state[index].title,
      };
      console.log(updateNote);
      return (state[index].title = action.payload.title);
    },
  },
});

export const { addNotes, deleteNotes, searchNotes, editNotes, clearAllNote } =
  notesSlice.actions;
export default notesSlice.reducer;
