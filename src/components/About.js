import React from "react";
import { useContext,useEffect } from "react";
import noteContext from "../context/notes/noteContext";
export const About = ()=>{  
    const a = useContext(noteContext)
    useEffect(()=>{
        a.update()
    },[])
    return(<div>
        THis is About {a.state.name}
    </div>)
}