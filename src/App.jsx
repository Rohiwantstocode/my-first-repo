import { useReducer, useState } from "react"

import './App.css'

const App =()=>{
const [arrOfTasks , setArrOfTasks] = useState([


])

 const [newTask , setNewTask] = useState('')
 const [newId , setNewId] = useState(1)

 function getNewId(){
  setNewId(newId=>newId+1)
 }


const getArray = arrOfTasks.map(values=>
<>
<div className="tasks" key={values.id}>
  <p>{values.name}</p>
  <button  className ='delete-btn'onClick={
    ()=>{
      setArrOfTasks(
        arrOfTasks.filter(value=>(
          value.id!==values.id

        ))
      )
    }
  }>&#10008;</button>
  <button  className ='completed-task'onClick={
    ()=>{
      setArrOfTasks(
        arrOfTasks.filter(value=>(
          value.id!==values.id

        ))
      )
    }
  }>&#10004;</button>
</div>
</>
)
console.log(arrOfTasks);


return(
<>

<p className="top-description">Your Tasks </p>
 <input type="text" 
 onChange={
  (e)=>{
   setNewTask( e.target.value)
  }
 }/>
 <button className="add-task" onClick={()=>{
  setArrOfTasks([
  ...arrOfTasks,
  {name:newTask , id:getNewId}
]
  )
 }}>Add task</button>


 {/* task List */}

 <div className="task-list">
 {getArray}

 </div>
</>

)
}



//mapping out tasks






export default App