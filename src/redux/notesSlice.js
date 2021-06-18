import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    clearAllNote: (state) => {
      state = [];
      return state;
    },
    replaceNote: (state, action) => {
      state = action.payload.notes;
      return state;
    },
    addNotes: (state, action) => {
      const indexNotes = state.find((item) => item.id === action.payload.id);

      if (action.payload.title === "") {
        return console.log("enter  value");
      }
      if (!indexNotes) {
        state.push({
          id: Date.now(),
          title: action.payload.title,
        });
      } else {
        indexNotes.id = action.payload.id;
        indexNotes.title = action.payload.title;
      }
    },
    deleteNotes: (state, action) => {
      const filteredNote = state.filter(
        (item) => item.id !== action.payload.id
      );

      return filteredNote;
    },
    searchNotes: (state, action) => {
      const searchNote = state.includes(
        (note) => note.title.toLowerCase() === action.payload.title
      );

      return searchNote;
    },
  },
});

export const {
  addNotes,
  deleteNotes,
  searchNotes,
  clearAllNote,
  updateNotes,
  replaceNote,
} = notesSlice.actions;
export default notesSlice.reducer;
