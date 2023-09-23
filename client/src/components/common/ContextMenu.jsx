import React, { useRef } from "react";

function ContextMenu({options, coordinates, contextMenu , SetContextMenu}) {
  console.log(options)
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) =>{
         
  }

  return <div
   className={`bg-dropdown-background fixed py-2 z-[100] top-[${coordinates.y}] left-[${coordinates.x}]`}
   ref={contextMenuRef}
  
  >
    <ul>
      {options.map(({name , callback})=>(
        <li key={name} onClick={(e)=>handleClick(e, callback)}><span className="text-white">{name}</span></li>
      ))}
      
    </ul>

  ContextMenu
  </div>
    
    
    
   
}

export default ContextMenu;
