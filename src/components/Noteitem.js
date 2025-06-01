import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
     const context = useContext(noteContext)
    const { deleteNode } = context
    const { note, updateNote } = props
    return (<div>
        {/* {note.title}
        {note.description} */}

        <div class="card">
            <div class="card-body">

                <h5 class="card-title">{note.title}</h5>

                <button type="button" className="btn btn-danger mx-2" onClick={() => deleteNode(note._id)}>DELETE</button>


                <button type="button" className="btn btn-danger mx-2" onClick={() => updateNote(note)} >UPDATE</button>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>

            </div>
        </div>
    </div>)
}

export default Noteitem