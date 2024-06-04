import React from "react";
import {NavLink} from "react-router-dom"
export const Projects = () => {
  return (
    <div className=" bg-emerald-200 rounded-md p-3 items-center justify-center">
      <div className=" grid items-center justify-center">
        <div className=" justify-center p-2 pr-10 ">
          <h4 className=" text-center font-bold uppercase">projects</h4>
          <div className=" grid items-center justify-center">
<div className=" ring-1 rounded-md ">
  <img src="../assets/Screenshot 2024-05-21 121923.png" className=" rounded-sm"/>
  <h1 className=" font-semibold dark:text-slate-50">Mixtube</h1>
  <NavLink to={"https://kenyanmix.vercel.app/"} className=" rounded-sm ring-1 ring-slate-50 p-1 dark:text-slate-50">Open Demo</NavLink>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};
