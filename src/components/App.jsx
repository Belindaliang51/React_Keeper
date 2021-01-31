import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from"./CreateArea";


// function createNotes(note){
//     return <Note 
//         key={note.key}
//         title={note.title}
//         content={note.content}
//     />
// }


function App(){

    //create a list to hold the input item 
    const [inputItem, setInputItem] = useState([])

    function addNote(newNote){
        setInputItem((preNote=>{
            return[...preNote, newNote]
        }))
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {inputItem.map((noteItem,index)=>{
                return <Note 
                    key={index}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            })}
           
            <Footer />
        </div>
    )
}
export default App;