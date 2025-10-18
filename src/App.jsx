import React, { useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskColum from './TaskColum'
import done from './assets/todo/done.png'
import hit from './assets/todo/hit.png'
import star from './assets/todo/star.png'
import { useState } from 'react'

const App = () => {
  const oldTasks = localStorage.getItem("task")
      const [task, settask] = useState(JSON.parse(oldTasks) || [])
      useEffect(() => {
        localStorage.setItem("task" , JSON.stringify(task))
      }, [task])
      const handleDelete =(taskToRemove)=>{
        const updateTAsk = task.filter((t)=> t !== taskToRemove)
        settask(updateTAsk)

      }
      

  return (


    <>
     <div className='h-full w-full  md:h-screen flex flex-col  items-center'>
      <div className="w-full">
             <TaskForm settask={settask}/>
      </div>
      <div className=" w-full p-5 ">
         <div className="md:flex  md:justify-evenly  md:max-w-7xl md:mx-auto">
      <TaskColum onDelete={handleDelete} task={task.filter((t)=>t.status === "Todo")} status={"Todo"} img={hit} title="TODO" />
       <TaskColum  onDelete={handleDelete} task={task.filter((t)=>t.status === "Doing")} status={"Doing"} img={star} title="DOING" />
       <TaskColum  onDelete={handleDelete} task={task.filter((t)=>t.status === "Done")} status={"Done"} img={done} title="DONE" />
    </div>

      </div>
     
 
    </div>
    
    
    </>
   
  )
}

export default App