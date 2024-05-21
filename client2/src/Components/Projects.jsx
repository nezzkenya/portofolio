import React from "react";

export const Projects = () => {
  return (
    <div className=" bg-emerald-200 rounded-md p-3 items-center justify-center">
      <div className=" grid items-center justify-center">
        <div className=" justify-center p-2 pr-10 ">
          <h4 className=" text-center font-bold uppercase">project sample</h4>
        </div>
        <div className="grid mx:flex">
          <div className="hidden mx:grid ring-1 rounded-lg shadow-xl shadow-black drop-shadow-sm w-fit mx-5 h-full">
            <div className=" flex h-50 ">
              <div className=" grid w-fit gap-3 justify-center items-center">
                <h4 className=" text-center ">Desktop view</h4>
                <img
                  className=" rounded-md p-1"
                  src="https://i.ibb.co/BsbJ1bH/Screenshot-2024-05-21-121923.png"
                  alt="Screenshot-2024-05-21-121923"
                  border="0"
                ></img>
                <img
                  className=" rounded-md p-1"
                  src="https://i.ibb.co/GRK2kyw/Screenshot-2024-05-21-125014.png"
                  alt="Screenshot-2024-05-21-121923"
                  border="0"
                ></img>
              </div>
            </div>
          </div>
          <div>
            <div className=" ring-1 rounded-lg shadow-xl shadow-black drop-shadow-sm w-fit mx-5 h-full">
              <h4 className=" text-center">Mobile view</h4>
              <img
                className="p-2 rounded-lg"
                width={290}
                src="https://i.ibb.co/Sy2cWBf/photo-5938105858443559524-y.jpg"
                alt="photo-5938105858443559524-y"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-2  pt-8 justify-center">
        <a href="https://kenyanmix.vercel.app/" target="_blank">
          <button className=" bg-orange-600 p-2 rounded-lg text-slate-50">
            View web app
          </button>
        </a>
      </div>
    </div>
  );
};
