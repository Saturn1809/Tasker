import React, { useState } from 'react'

import Create from './components/Create';
import Read from './components/Read';




const App = () => {

 const [ todos, settodos] = useState([

  
 ]);


  return (
    <div className = 'flex w-full h-screen gap-2 px-10 py-20 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]'>  
     
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos}/>
      
      
       </div>
  )
}

export default App
