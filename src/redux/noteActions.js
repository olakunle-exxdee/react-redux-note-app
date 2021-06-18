import { replaceNote } from "./notesSlice";
export const fetchNoteData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com/notes.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("fetching notes failed");
      }

      console.log(data, "responsedata");
      return data;
    };

    try {
      const noteData = await fetchData();

      dispatch(replaceNote({ notes: noteData || [] }));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const sendNoteData = (notes) => {
  return async () => {
    const sendReq = async () => {
      const response = await fetch(
        "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com/notes.json",
        { method: "PUT", body: JSON.stringify(notes) }
      );

      if (!response.ok) {
        throw new Error("sending notes failed");
      }
    };

    try {
      await sendReq();
    } catch (error) {
      console.log(error);
    }
  };
};
