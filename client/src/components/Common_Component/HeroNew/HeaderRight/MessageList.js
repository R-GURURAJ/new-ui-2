import React from 'react'
import { useSelector} from "react-redux";


const MessagesContent = ({grpName}) => {
    return (
        // bg-[#0ca5e9]
        < div class="flex items-center my-6 space-x-2 h-14 hover:bg-blue-500 rounded-xl pl-2 " >
            <div className="avatar placeholder ">
                <div className="rounded-full w-10 bg-blue-600 text-white uppercase font-semibold">
                <span className=" text-xl ">{grpName.charAt(0)}</span>
                
            </div>
            </div>
            <div class="flex flex-col">
                <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    {grpName}
                </span>
                <span class="ml-2 text-sm text-gray-400 dark:text-gray-300">
                    Hey John ! Do you read the NextJS doc ?
                </span>
            </div>
           
        </div >
    )
}

function MessageList() {
  const fulldata = useSelector((state) => state.chat.fullData);
  console.log(fulldata.groups)

    return (
        <div class="mb-4">
            <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                <p class="font-bold text-black text-md dark:text-white">
                    Groups
                </p>
                <div className='overflow-auto scrollbar-hide max-h-80'>
                    {
                        fulldata.groups.map((data,i)=>{
                            return(
                            <MessagesContent grpName={data} key={i}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default MessageList
