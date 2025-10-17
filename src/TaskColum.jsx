import React from "react";
import TaskCard from "./TaskCard";



const TaskColum = ({ img, title,task, }) => {
  return (
    <>
    <div className=" flex flex-col items-center gap-5 w-[400px] ">
   
      <div className="  flex items-center justify-center p-2">
        <img className="w-30 h-30 object-contain" src={img} alt="done" />
        <h1 className=" text-4xl font-bold">{title} </h1>
      </div>
      <div className="z-10  flex flex-col  gap-5 max-w-[400px]
">
         {task.map((item,index)=>{
       return  <TaskCard className='' key={index} task={task} item={item} />

   
        

      })}


      </div>
     
      



    </div>
    
    
    </>
  
    
  );
};

export default TaskColum;
