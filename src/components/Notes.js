import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    useEffect(() => {
        getNotes()
    }, [])


    // const ref=useRef(null);
    // const updateNote = (note) =>{
    //     ref.current.click();
    // }
    const [currentNote, setCurrentNote] = useState({});

    const updateNote = (note) => {
        setCurrentNote(note); // Save selected note to state
        const modal = new window.bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show(); // Show the modal using Bootstrap JS API
    };


    const handleClick = () => {
        editNote(currentNote._id, currentNote.title, currentNote.description);

        // Optionally close modal manually
        // const modal = window.bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
        // modal.hide();
    };


    return (
        <>
            <div>
                <AddNote></AddNote>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={currentNote.title || ""}
                                            onChange={(e) =>
                                                setCurrentNote({ ...currentNote, title: e.target.value })
                                            }
                                        /></div>

                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control"
                                            value={currentNote.description || ""}
                                            onChange={(e) =>
                                                setCurrentNote({ ...currentNote, description: e.target.value })
                                            } />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>You Notes</h2>
                {notes.map((note) =>
                //  (
                //     <div key={note._id}>
                //         <h3>{note.title}</h3>
                //         <p>{note.description}</p>
                //     </div>
                // )
                {
                    return <Noteitem note={note} updateNote={updateNote} />
                }
                )}

            </div>
        </>

    )
}

export default Notes