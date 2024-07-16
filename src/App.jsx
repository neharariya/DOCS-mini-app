"use client";

import React, { useState } from 'react'
import Background from 
'./components/Background';
import Foreground from 
'./components/Foreground';

const App = () => {
  // const [show, setShow] = useState(true);

  // const update = () => {
  //   // console.log("...");

  //   setShow(!show);
  // }


  return (
    <>
      <div className=" w-full h-screen bg-zinc-800 px-10 overflow-hidden">
      <Background/>
      <Foreground/>
      </div>

      {/* <button onClick = {update} className="bg-teal-500 font-bold text-xl text-center text-white rounded-xl px-4 py-2">Button</button>
      {show && <p>Welcome to this page</p>} */}

    </>
   
  )
}


export default App