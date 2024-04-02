import React from "react";


function Heading({data}) { 
  return (
      <div className="w-screen h-[20%]   p-5 flex justify-center items-center ">
        <div className=" w-[80%] max-sm:w-[90%] flex justify-center items-center">
          <div className="content flex justify-evenly items-center flex-col ">
            <h1 className=" text-3xl font-semibold p-5 max-sm:p-2">
           {  data.title}
            </h1>
            <h2 className=" p-2">{data.description}</h2>
          </div>
        </div>
      </div>
  );
}

export default Heading;
