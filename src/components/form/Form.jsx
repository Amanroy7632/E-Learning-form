import React, { useState } from "react";
import useProgress from "../../context/useProgress";
import userLogo from "../../svg/girluser.svg"
function Form({ formData ,borderColor}) {
    const {nextProgress}=useProgress();
    const [item,setItem]=useState(null)
    const [active,setActive]=useState(false)
    const selectedItem=(item)=>{
       setItem(item)
       setActive(true)
    //    console.log(`Seleted item ${item} && active ${active}`);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const value=formData.filter((data)=>data.id===item)
        if (value.length>0) {
            // console.log(value[0].input.value);
            nextProgress();
            setItem(null)
            setActive(false)
        }
        return <Form/>
    }
  return (
    <div className="w-screen h-[60%]  p-5 flex justify-center items-center">
        <div className=" w-[40%] max-md:w-[60%] max-sm:w-[100%] flex justify-center items-center ">
    <form onSubmit={handleSubmit}>
      {formData.map((data,index) => (
        // 🧑🏾‍🎓🧑🏾‍🏫
        <div key={index} onClick={()=>{selectedItem(data.id)}} className={`content flex justify-evenly items-center cursor-pointer rounded-[5px] my-3 ${data.id===item && active?` border-[2px] ${borderColor} `:"border"}`}>
          <div className="image w-[8%] max-sm:w-[15%]">
            <img
            //   src="https://images.unsplash.com/photo-1601655781320-205e34c94eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
            src={userLogo}
            // src={data.image}
              alt=""
            />
          </div>
          <div className=" w-[80%]  p-3">
            <label htmlFor="" className=" font-bold cursor-pointer">
              {data.label.title}
            </label>
            <input
              type="text"
              readOnly
              placeholder={data.input.placeholder}
              className={`outline-none pl-1 cursor-pointer ${data.input.placeholder===""?"hidden":""}`}
            />
          </div>
        </div>
      ))}
      <div className=" flex justify-center items-center">
        <button className={` border  px-8 py-2 rounded-md ${item?"bg-black text-white hover:bg-slate-700":"bg-gray-300"}`} disabled={!item} >Continue</button>
      </div>
    </form>
        </div>
      </div>
  );
}

export default Form;
