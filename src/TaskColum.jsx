import React from "react";
import TaskCard from "./TaskCard";



const TaskColum = ({ img, title,task, onDelete }) => {
  return (
    <>
    <div className="  flex flex-col items-center gap-5 w-full md:w-[400px] ">
   
      <div className=" bg-blue-200 rounded-md w-full   flex justify-center  items-center p-2 ">
        <img className="w-30 h-30 object-contain " src={img} alt="done" />
        <h1 className=" text-4xl font-bold mr-15">{title} </h1>
      </div>
      <div className="z-10  flex flex-col  gap-5 max-w-[400px]
">
         {task.map((item,index)=>{
       return  <TaskCard ondelete={()=>{onDelete(item)}} className='' key={index} task={task} item={item} />

   
        

      })}


      </div>
     
      



    </div>
    
    
    </>
  
    
  );
};

export default TaskColum;
