import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from"./CreateArea";


function App(){

    //create a list to hold the input item 
    const [inputItem, setInputItem] = useState([])

    function addNote(newNote){
        setInputItem((preNote=>{
            return[...preNote, newNote]
        }))
    }

    function deleteNote(id){
        setInputItem((preNote)=>{
            return preNote.filter((item, index)=>{
                return index !==id
            })
        })
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {inputItem.map((noteItem,index)=>{
                return <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
           
            <Footer />
        </div>
    )
}
export default App;