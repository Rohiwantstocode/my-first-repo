
import { useState } from 'react'
import  './App.css'

let numberOfThings =  'Hello try this'

 function App(){

const [number , setNumber] = useState(0)

function updateNumber(){
setNumber(number + 1)
   
}
    return(
        <>
        <p>{numberOfThings}</p>
       <p>Number is 0 buhh now number is {number}</p>
       <button onClick={updateNumber}>Click</button>
        </>
    )
}

export default App