import React from 'react'
import { Trash2 } from 'lucide-react';

const TaskCard = ({item,ondelete}) => {
  return (
    <>
         <div className="  md:h-max md:min-h-40 w-[250px] sm:min-h-40 sm:w-[350px] md:w-[350px] p-5 border-1 border-black/30 justify-between  rounded-2xl flex flex-col gap-5">
      <div className="">
        <p className="line-clamp-2 overflow-auto break-words font-semibold text-xl">{item.task}</p>
      </div>
      <div className=" flex justify-between items-center">
        <div className="flex flex-wrap justify-start  gap-2">
            {item.tags.map((tag,index)=>{
                return <button key={index} className={`md:py-2 md:px-4 py-1 px-3 sm:py-2 sm:px-4 ${tag === 'HTML' ? 'bg-red-500' : tag === "CSS" ? "bg-green-500" : tag ==="JS" ? "bg-blue-500 " : 'bg-amber-500'  } rounded-md font-medium text-white`}>{tag}</button>
            }

        )}
           
            
        </div>
            <div className="">
              <button onClick={ondelete} className=" py-1 px-3 md:py-3 md:px-4  sm:py-3 sm:px-4 border-1 rounded-md border-[#dadada]"><Trash2 className=" md:w-8 md:h-8 text-red-500" /></button>
            </div>
      </div>
    </div>
    
    
    </>
   
  )
}

export default TaskCard