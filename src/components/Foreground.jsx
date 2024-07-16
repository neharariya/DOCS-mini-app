import React, { useRef } from 'react'
import Card from './Card';

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "lorem ipsum tuny ujnhg bhunh mkijmnn bhbbb gftyuhfg kiknju hguki jh",
      fileSize: "4.1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },

    {
      desc: "lorem ipsum tuny ujnhg bhunh mkijmnn bhbbb gftyuhfg kiknju hguki jh",
      fileSize: "4.1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },

    {
      desc: "lorem ipsum tuny ujnhg bhunh mkijmnn bhbbb gftyuhfg kiknju hguki jh",
      fileSize: "4.1mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },
    }
  ];

  return (
    <div ref = {ref} className=" flex gap-5 h-full w-full z-[3]">
      {data.map((item, index)=>(
        <Card key = {index} content={item} reference = {ref}/>
      ))}
    </div>
  )
}

export default Foreground