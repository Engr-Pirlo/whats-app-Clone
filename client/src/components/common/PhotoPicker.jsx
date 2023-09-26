import React from "react";

function PhotoPicker({onChange}) {
  const component = (
    <input type="file" hidden id="photo-picker" onChange={onchange}/>
  );
  return ReactDOM.createPortal(component, document.getElementById("photo-picker-element"))
}

export default PhotoPicker;
