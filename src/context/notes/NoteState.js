// import NoteContext from "./noteContext"
// import { useState } from "react"
// const NoteState = (props) => {

//     const notesInitial = [
//         {
//             "_id": "683176a4773cc181aa8bff23",
//             "user": "683173ec773cc181aa8bff1e",
//             "title": "New Note",
//             "description": "This is a new note.",
//             "tag": "General",
//             "date": "2025-05-24T07:35:00.644Z",
//             "__v": 0
//         }, {
//             "_id": "683176a4773cc181aa8bff23",
//             "user": "683173ec773cc181aa8bff1e",
//             "title": "New Note",
//             "description": "This is a new note.",
//             "tag": "General",
//             "date": "2025-05-24T07:35:00.644Z",
//             "__v": 0
//         }
//     ]
//     const [notes, setNotes] =useState(notesInitial)
    
//     const s1 = {
//         name: "Harry",
//         class: "hb"
//     }

//     // const [state, setState] = useState(s1)
//     // const update = () => {
//     //     setTimeout(() => {
//     //         setState({
//     //             name: "john",
//     //             class: "cvvv"
//     //         })
//     //     }, 1000)
//     // }
//     return (
//         <NoteContext.Provider value={{ notes, setNotes }}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState

import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const [notes, setNotes] = useState([
    { _id: "1", title: "Note 1", description: "This is note 1" },
    { _id: "2", title: "Note 2", description: "This is note 2" }
  ]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
