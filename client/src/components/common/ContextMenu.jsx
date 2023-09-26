import React, { useEffect, useRef } from "react";
function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {
  console.log(options);
  const contextMenuRef = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (even) => {
      if (even.target.id !== "context-opener") {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(even.target)
        ) {
          setContextMenu(false);
        }
      }
    };
    
    document.addEventListener('click', handleOutSideClick);
    return () =>{
      document.removeEventListener('click' , handleOutSideClick);
    }

  }, []);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
    callback();
  };

  return (
    <div
      className={`bg-dropdown-background fixed py-2 z-[100]`}
      ref={contextMenuRef}
      style={{
        top: coordinates.y,
        left: coordinates.x,
      }}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li
            key={name}
            onClick={(e) => handleClick(e, callback)}
            className="px-5 y-2 cursor-pointer hover:bg-background-default-hover"
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
      ContextMenu
    </div>
  );
}

export default ContextMenu;
