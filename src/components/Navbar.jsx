import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-black w-full h-20 bg-gray-800 px-4 max-w-[95%] mx-auto rounded">
      <div>
        <img className="h-8 cursor-pointer" src={logo} alt="" />
      </div>
      <div className="text-white flex gap-3 items-center font-semibold">
        
          <button className="btn btn-neutral hover:btn-info px-6 text-white font-bold">Home</button>
          <button className="btn btn-neutral hover:btn-info px-6 text-white font-bold">Blog</button>
          <button className="btn btn-neutral hover:btn-info px-6 text-white font-bold">About</button>
          <button className="btn btn-neutral hover:btn-info px-6 text-white font-bold">Login</button>
        
      </div>
    </div>
  );
};

export default Navbar;
