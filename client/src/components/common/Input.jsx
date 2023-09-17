import React from "react";

function Input(name, state,setSate,label=false) {
  return <div className="flex gap-1 flex-col">
        {
          <label htmlFor="{name}" className="text-teal-light text-lg px-1">
           {name}
          </label>
        }

  </div>;
}

export default Input;
