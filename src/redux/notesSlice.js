import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
localStorage.setItem("notes", JSON.stringify(initialState));

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
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
      console.log(filteredNote);
      return filteredNote;
    },
    searchNotes: (state, action) => {
      console.log(action.type);
      const searchNote = state.filter((note) =>
        note.title.toLowerCase().includes(action.payload.title)
      );

      console.log(searchNote);
      if (searchNote) {
        const search = searchNote.map((note) => note);
        return search;
      } else {
        return state.map((note) => note);
      }
    },
    editNotes: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].isEdit = action.payload.isEdit;
      console.log(index, "index");
      console.log(action, "action");
      console.log(state, "state");
    },
  },
});

export const { addNotes, deleteNotes, searchNotes, editNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
