import React from "react";

function Input({label,type,id, value,icon,setter}) {
  return (
    <>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={icon} alt="" srcset="" />
        </div>
    
      <input
        placeholder={label}
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={(event) => setter(event.target.value)}
        className="placeholder-shown:right-5 w-full px-10 py-2 rounded-lg shadow-sm border-2 border-slate-200 focus:border-primary outline-none"
      /></div>
    </>
  );
}

export default Input;
