import React from 'react'
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion"


const Card = ({content,reference})=> {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag = {{scale:1.1}} dragElastic= {.5}className=" relative bg-zinc-700 rounded-3xl w-32 h-40 z-10 overflow-hidden pt-2">
      <MdOutlineContactPage className='ml-3 text-white' />
      <p className="text-white text-[10px] mt-3 px-3">{content.desc}</p>

      <div className=" absolute bottom-0 footer flex-col  items-center h-12 w-full">
        <div className="flex justify-between items-center w-full px-3 text-white pb-2">
          <p className="text-[10px]">{content.fileSize}</p>
          {content.close ?  <ImCross className="text-white text-sm pb-1 " /> : <MdOutlineDownloadForOffline className="text-[10px]"/>}
          
        </div>

        {content.tag.isOpen && <div className={`flex items-center justify-center pb-5 text-[10px]  ${content.tag.tagColor === "blue" ? "bg-blue-400 ": "bg-green-600"} w-full h-full`}>{content.tag.tagTitle}</div>}


      </div>
    </motion.div>
  )
}

export default Card