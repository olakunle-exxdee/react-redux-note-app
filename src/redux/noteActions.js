// export const fetchNoteDat = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://note-app-olakunle-exxdee-default-rtdb.firebaseio.com/notes.json"
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error("fetching notes failed");
//       }
//       if (data === null) {
//         return [];
//       }

//       return data.notes;
//     };

//     try {
//       const noteData = await fetchData();
//       dispatch(replaceNote({ notes: noteData || [] }));
//     } catch (error) {
//       console.log(error);
//       throw new Error(error);
//     }
//   };
// };
// export const fetchNoteData = () => {
//   return async (dispatch) => {
//     let citiesRef = db.collection("notes");
//     let allCities = await citiesRef.get();
//     for (const doc of allCities.docs) {
//       doc.data();
//     }
//   };
// };

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
