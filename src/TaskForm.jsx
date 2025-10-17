import React from "react";
import { useState } from "react";

const TaskForm = ({settask}) => {


  const [taskData, settaskData] = useState({
    task : '',
    status : "Todo",
    tags : [],
  })
   console.log("Task Data :", taskData);
   const handleChange =(e)=>{
    const {value ,name} = e.target
    settaskData((prev)=>{
      return {...prev,[name]:value}
    })
   }
const selectTag = (tag) => {
  if (taskData.tags.some((item) => item === tag)) {
    const filterTags = taskData.tags.filter((item) => item !== tag);
    settaskData((prev) => {
      return { ...prev, tags: filterTags };
    });
  } else {
    settaskData((prev) => {
      return { ...prev, tags: [...prev.tags, tag] };
    });
  }
};  

   const handleSubmit =(e)=>{
    e.preventDefault()
    if(taskData.task.trim() === ""){
      alert("Enter Your Task please")
      return;
    }
    console.log(typeof taskData.tags)
    settask((prev)=>{
      return [...prev,taskData]
    })
    settaskData({
    task : '',
    status : "Todo",
    tags : [],
    })
   }
 
  return (
    <>
      <section className="Header section p-10 border-b-2 bg-white border-[#dadada]  ">
        <form action="" onSubmit={handleSubmit} className="max-w-5xl m-auto gap-4 flex  flex-col  ">
          <div className=" flex justify-center ">
            <input
              type="text"
              className="bg-white border-1 border-[#dadada] rounded-2xl font-semibold text-2xl outline-0 w-full  py-5 px-6 "
              placeholder="Enter Your Task"
              name="task"
              value={taskData.task}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between 00 items-center">
            <div className=" space-x-10 ">
              <button type="button" className={`py-2 px-4 ${taskData.tags.includes("HTML")? 'bg-red-500/50' : 'bg-red-500'  } rounded-md font-medium  text-white`}onClick={()=>{
                selectTag("HTML")
              }} >HTML</button>
              <button type="button"className={`py-2 px-4 ${taskData.tags.includes("CSS")? 'bg-green-500/50' : 'bg-green-500'  } rounded-md font-medium  text-white`}onClick={()=>{
                selectTag("CSS")}}>CSS</button>
              <button type="button" className={`py-2 px-4 ${taskData.tags.includes("JAVASCRIPT")? 'bg-blue-500/50' : 'bg-blue-500'  } rounded-md font-medium  text-white`}onClick={()=>{
                selectTag("JAVASCRIPT")
              }}>JAVASCRIPT</button>
              <button type="button" className={`py-2 px-4 ${taskData.tags.includes("REACT")? 'bg-yellow-500/50' : 'bg-yellow-500'  } rounded-md font-medium  text-white`}onClick={()=>{
                selectTag("REACT")
              }}>REACT</button>
            </div>
            <div className=" space-x-10">
              <select
                name="status"
                value={taskData.status}
                onChange={handleChange}
                id=""
                className="text-white font-semibold py-3 px-4 border-2 rounded-md bg-blue-300 border-[#dadada]"
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <button type="submit" className="py-3 px-4 bg-purple-500 text-white font-medium rounded-md ">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );

}
export default TaskForm;
