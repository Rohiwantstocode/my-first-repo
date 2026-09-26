import  { useReducer, useState } from "react"

import './App.css'





const App=()=>{

const [task , dispatch] = useReducer(Action , 
 [
  {id:1 , objective:'learn React' , completed: 'false' ,isEditing:false},
    {id:2 , objective:'Do some practicals' , completed: 'false' , isEditing:false}
 ]
)



function Action(task,action){
  switch (action.type) {
    case 'Add-task':
      return([...task,{id:3, objective:'Your new task' , completed:false}])
      case 'delete-task':
        return( task.filter(value=>value.id!==action.id)    )
        case 'edit-task':
          return(
            task.map((values)=>
            values.isEditing =true
            )
          )
  }
}
//mapping out tasks
const getTasks =task.map((value)=>


<div className = 'circle' key={value} >
  <p>{value.objective}</p>
{value.isEditing ===false && <button onClick={()=>{dispatch({type:'edit-task'})}}>Edit Task</button>}
{value.isEditing ===true && <button onClick={()=>{dispatch({type:'save-task'})}}>Save Task</button>}
 <button  onClick={()=>{dispatch({type: 'delete-task' ,id:value.id})}}>Delete Task</button>
</div> 
)
//UI
  return(
  <>
  <h1>Hello User</h1>
{getTasks}
  <button onClick={(e)=>{  dispatch({   type:'Add-task' , })}}>Add new Task</button>
  </>
  )
}






  

export default App

