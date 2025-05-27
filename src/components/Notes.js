import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, setNotes } = context
    return (

        <div>
            <h2>You Notes</h2>
            {notes.map((note) =>
            //  (
            //     <div key={note._id}>
            //         <h3>{note.title}</h3>
            //         <p>{note.description}</p>
            //     </div>
            // )
            {
                return <Noteitem note={note}/>
            }
            )}

        </div>
    )
}

export default Notes