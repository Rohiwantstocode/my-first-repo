import { useReducer, useState } from "react"

import './App.css'

const App =()=>{
const [arrayOfTasks, SetTasks] = useState([
  {taskName:'become more logical' , id:1 , completed: false , isEditing: false},
   {taskName:'learn React' , id:2, completed: false , isEditing: false},
    {taskName:'finish projects' , id:3 , completed: false , isEditing: false}
])
const [numbers , setNumbers] = useState(0)

function addNewTask(){
  SetTasks([
    ...arrayOfTasks,
    {taskName:'My New Task' ,id:addNumbers,completed:false  , isEditing: false}
  ])
}
 function addNumbers(){
  setNumbers(numbers=>numbers+1)
  }


 
const getTasks = arrayOfTasks.map((values)=>
  //mapping out objects
     <div className="circle" key={values}>
    { !values.isEditing && <p>{values.taskName}</p>}
     { values.isEditing && <input value={values.taskName}></input>}
     {/* setting out condtions for  buttons */}

     {/* to edit task */}
{!values.isEditing &&<button onClick={()=>{SetTasks(arrayOfTasks.map(taskObj=>( {...taskObj,isEditing: true})) ) }}>Edit Task</button> }

    {/* to save edited task */}
    {values.isEditing && <button onClick={()=>{SetTasks(arrayOfTasks.map(taskObj=> ({...taskObj,isEditing: false})) ) }} >Save Task</button> }    {' '}

    {/* to delete task */}
       <button onClick={()=>{ SetTasks(arrayOfTasks.filter(value=> value.id !== values.id ))}}>Delete Task</button>
    </div>
  )
  // button conditions done
  // jsx
  
 return(
  <>
<h1>Hello user</h1>
{getTasks}
 <button onClick={addNewTask}>Add new task</button>
  </>
 )
}






export default App