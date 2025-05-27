import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";


const Home = () => {
    // const context = useContext(noteContext)
    // const { notes, setNotes } = context
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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