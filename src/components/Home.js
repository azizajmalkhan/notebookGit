import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";


const Home = () => {
    // const context = useContext(noteContext)
    // const { notes, setNotes } = context
    return (
        <div>
            
            {/* <div>
                <h2>You Notes</h2>
                {notes.map((note) =>
                //  (
                //     <div key={note._id}>
                //         <h3>{note.title}</h3>
                //         <p>{note.description}</p>
                //     </div>
                // )
                {
                    return note.title
                }
                )}

            </div> */}
            <Notes></Notes>
        </div>
    )
}

export default Home