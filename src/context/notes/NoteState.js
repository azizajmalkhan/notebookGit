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
  let notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  //   [
  //   { _id: "1", title: "Note 1", description: "This is note 1" },
  //   { _id: "2", title: "Note 2", description: "This is note 2" }
  // ]

  let host = "http://localhost:5000"
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzMTZhMzI3NzNjYzE4MWFhOGJmZjE4In0sImlhdCI6MTc0ODcxMzQxMH0.QSJZOozMX2xlUp6vEiiNFdmCKjrE5e_FhIJhkhgzh7I"
      }

    })
    const json = await response.json()
    setNotes(json)
    console.log(json);

  }

  const addNote = async (title, description) => {
    // let note = { _id: "3", title: title, description: description }
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzMTZhMzI3NzNjYzE4MWFhOGJmZjE4In0sImlhdCI6MTc0ODcxMzQxMH0.QSJZOozMX2xlUp6vEiiNFdmCKjrE5e_FhIJhkhgzh7I"
      },
      body: JSON.stringify({ title, description })
    })
    const json = await response.json()
    //setNotes(json)
    console.log(json);

    //setNotes(notes.concat(note))

    // setNotes([...notes, note]);
  }

  const deleteNode = async (id) => {
    // let updatedNote = notes.filter((item) => {
    //   if (id != item._id) {
    //     return item;
    //   }

    //})

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzMTZhMzI3NzNjYzE4MWFhOGJmZjE4In0sImlhdCI6MTc0ODcxMzQxMH0.QSJZOozMX2xlUp6vEiiNFdmCKjrE5e_FhIJhkhgzh7I"
      }
     // body: JSON.stringify({ title, description })
    })
    const json = await response.json()
    //setNotes(json)
    console.log(json);
    //let updatedNote=notes.filter((item) => item._id !== id)
    //setNotes(updatedNote)

  }


  
  const editNote = async (id,title, description) => {
    // let updatedNote = notes.filter((item) => {
    //   if (id != item._id) {
    //     return item;
    //   }

    //})

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzMTZhMzI3NzNjYzE4MWFhOGJmZjE4In0sImlhdCI6MTc0ODcxMzQxMH0.QSJZOozMX2xlUp6vEiiNFdmCKjrE5e_FhIJhkhgzh7I"
      },
      body: JSON.stringify({ title, description })
    })
    const json = await response.json()
    //setNotes(json)
    console.log(json);
    //let updatedNote=notes.filter((item) => item._id !== id)
    //setNotes(updatedNote)

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNode, getNotes,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
