import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNoteDataAsync = createAsyncThunk(
  "notes/fetchNoteDataAsync",
  async () => {
    const response = await fetch(
      "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com/notes.json"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("fetching notes failed");
    }
    if (data === null) {
      return [];
    }

    return data.notes;
  }
);
// export const addNotesDataAsync = createAsyncThunk(
//   "notes/addNotesDataAsync",
//   async (notes) => {
//     const addNoteAsync = async () => {
//       const response = await fetch(
//         "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com/notes.json",
//         { method: "PUT", body: JSON.stringify(notes) }
//       );

//       if (!response.ok) {
//         throw new Error("sending notes failed");
//       }
//     };

//     try {
//       await addNoteAsync();
//       console.log(addNoteAsync());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    clearAllNote: (state) => {
      return { ...state, notes: [] };
    },
    replaceNote: (state, action) => {
      return { ...state, notes: action.payload.notes };
    },
    addNotes: (state, action) => {
      const indexNotes = state.notes.find(
        (item) => item.id === action.payload.id
      );

      if (action.payload.title === "") {
        return;
      }
      if (!indexNotes) {
        state.notes.push({
          id: Date.now(),
          title: action.payload.title,
        });
      } else {
        indexNotes.id = action.payload.id;
        indexNotes.title = action.payload.title;
      }
    },
    deleteNotes: (state, action) => {
      const filteredNote = state.notes.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, notes: filteredNote };
    },
  },
  extraReducers: {
    [fetchNoteDataAsync.fulfilled]: (state, action) => {
      return { ...state, notes: action.payload };
    },
  },
});

export const { addNotes, deleteNotes, clearAllNote, updateNotes, replaceNote } =
  notesSlice.actions;
export default notesSlice.reducer;
