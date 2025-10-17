import React from 'react'
import TaskForm from './TaskForm'
import TaskColum from './TaskColum'
import done from './assets/todo/done.png'
import hit from './assets/todo/hit.png'
import star from './assets/todo/star.png'
import { useState } from 'react'

const App = () => {
  const oldTasks = localStorage.getItem("task")
      const [task, settask] = useState(JSON.parse(oldTasks) || [])

  return (


    <>
     <div className='h-screen'>
      <div className="">
             <TaskForm settask={settask}/>
      </div>
      <div className=" p-5 ">
         <div className=" flex justify-evenly  max-w-7xl mx-auto">
      <TaskColum task={task.filter((t)=>t.status === "Todo")} status={"Todo"} img={hit} title="TODO" />
       <TaskColum task={task.filter((t)=>t.status === "Doing")} status={"Doing"} img={star} title="DOING" />
       <TaskColum task={task.filter((t)=>t.status === "Done")} status={"Done"} img={done} title="DONE" />
    </div>

      </div>
     
 
    </div>
    
    
    </>
   
  )
}

export default App