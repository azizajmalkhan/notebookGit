
import React, { useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
     const context = useContext(noteContext)
    const { addNote } = context
    const  [note,setNote]=useState({title:"",description:""})
    const   handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description)
    }
    const   onChange=(e)=>{

        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
<div>
    
        <form>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp"    onChange={onChange}></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description"  onChange={onChange}></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary"   onClick={handleClick}>Submit</button>
        </form>
</div>
    )
}


export default AddNote