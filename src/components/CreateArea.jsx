import React, {useState} from "react";
import PlusOneIcon from '@material-ui/icons/PlusOne';


function CreateArea(props){
    const [note, setNote] = useState({
        title:"",
        content:""
        })

    const [isExpanded, setExpanded] = useState(false);

        function handleChange(event){
            const {name,value} = event.target;

            setNote(preNote=>{
                return{
                    ...preNote,
                    [name]:value
                }
            })
        }

        function handleClick(event){
           props.onAdd(note);  //call the addNote function on App.jsx
           event.preventDefault();
           setNote({
            title:"",
            content:""
           })
        }

        function expand(){
            //console.log("expand")
            setExpanded(true);
        }

    return(
        <div>
            <form>
                {isExpanded && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
                <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} />
                <button onClick={handleClick}>
                    <PlusOneIcon />
                </button>
            </form>
        </div>

    );
}

export default CreateArea;