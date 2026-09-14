
import './App.css'

function App() {
  function getUserName(){
    console.log('Hello');
    
  }
return (
 <>
  <div className = 'buttoncover' onClick={()=>{
    alert('hello you clicked the div')
  }}>
 <PlayMovie  Moviename = 'Avengers' />
    <PlayMovie Moviename = 'Jusitce league' />
  <EventHandlers />
    </div>
 </>
)

}

function PlayMovie({Moviename}){
let play=e=>{
    alert(`Playing ${Moviename}`)
    e.stopPropagation()
  }
  

  return (
    <>
    <Button Show={ play} name ={Moviename}  />
    </>
  )
}

function Button({Show, name}){

  //jsx
  return(
    <>
<button  className='button' onClick={Show} >{name}</button>
    </>
 
  )
}


function EventHandlers({}){
 
return(
  <>
  <button className = 'button' onClick ={e=>{
    e.stopPropagation()
    alert('Hello new user')
  }}
    >Click Me</button>

    </>
)
}
export default App




  // let obj = {
  //   name:'ife',
  //   sayName: ()=>{
  //     console.log(obj.name);
      
  //   }
  // }
  

  // obj.sayName()
