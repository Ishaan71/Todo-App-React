import React from 'react'
import { Trash2 } from 'lucide-react';

const TaskCard = ({item}) => {
  return (
    <>
         <div className=" h-max min-h-40 w-[350px] p-5 border-1 border-black/30  rounded-2xl flex flex-col gap-5">
      <div className="">
        <p className="line-clamp-2 overflow-auto break-words font-semibold text-xl">{item.task}</p>
      </div>
      <div className=" flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
            {item.tags.map((tag,index)=>{
                return <button key={index} className={`py-2 px-4 ${tag === 'HTML' ? 'bg-red-500' : tag === "CSS" ? "bg-green-500" : tag ==="JAVASCRIPT" ? "bg-blue-500 " : 'bg-amber-500'  } rounded-md font-medium text-white`}>{tag}</button>
            }

        )}
           
            
        </div>
            <div className="">
              <button className=" py-3 px-4 border-1 rounded-md border-[#dadada]"><Trash2 className=" w-8 h-8 text-red-500" /></button>
            </div>
      </div>
    </div>
    
    
    </>
   
  )
}

export default TaskCard