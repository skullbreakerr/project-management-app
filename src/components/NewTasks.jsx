import {useState} from 'react';
export default function NewTasks({onAddTask}){
    
    const[enteredTask,setEnteredTask]=useState("");
    
    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    
    function handleClick(){
        onAddTask(enteredTask);
        setEnteredTask('');

    }
    
    return(
        <div>
            <input type='text' className="w-64 bg-stone-200 px-2 py-1 rounded-sm" value={enteredTask} onChange={(e)=>{handleChange(e)}}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Tasks</button>
        </div>
    )
}