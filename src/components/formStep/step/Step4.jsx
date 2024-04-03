import Heading from "../../heading/Heading";
import mathImg from "./../images/math.png"
import algebraImg from "./../images/algebra.png"
import { useState } from "react";
export const Step4 = ({ onNext }) => {
    const squareData = [
      {
        id: 1,
        title: "Airthmetic",
        subTitle: "Introductory",
        imgSrc: mathImg,
        questionMark: true,
      },
      {
        id: 2,
        title: "Basic Algebra",
        subTitle: "Foundational",
        imgSrc: algebraImg,
        questionMark: false,
      },
      {
        id: 3,
        title: "Intermediate Algebra",
        subTitle: "Intermediate",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2urGh2eFnlc5BX86VaRR4IWnYOPaqCBozQ&usqp=CAU",
        questionMark: false,
      },
      {
        id: 4,
        title: "Calculas",
        subTitle: "Advanced",
        imgSrc:
          "data:image/jpeg;base64,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",
        questionMark: false,
      },
    ];
    const [item, setItem] = useState(null);
    const handleClick = (id) => {
      setItem(id);
      console.log(item);
    };
    return (
      <div>
        <Heading
          data={{
            title: "What is your math comfortable level ?",
            description:
              "Choose the highest level you feel confident in --you can adjust later.",
          }}
        />
        <div className="main-container flex justify-center items-center flex-col">
          <div className=" w-[80%] max-md:w-[90%] flex justify-center gap-5 items-center max-md:flex-col ">
            {squareData.map((data) => (
              <div
                key={data.id}
                className={` w-[80%] flex flex-col justify-center rounded-md items-center cursor-pointer ${
                  item === data.id ? " border-[2px] border-yellow-400" : ""
                } border shadow-md shadow-gray-300`}
                onClick={() => {
                  handleClick(data.id);
                }}
              >
                <div className="math p-8 flex justify-center items-center">
                  {/* <img src={mathImg} alt="" /> */}
                  <img
                    src={data.imgSrc}
                    alt="img"
                    className=" w-[10rem] h-[5rem]"
                  />
                  {data.questionMark ? <h1 className=" text-4xl">?</h1> : ""}
                </div>
                <div className=" p-2">
                  <h1>{data.title}</h1>
                  <p>{data.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" pt-[5%]">
            <button
              className={` border  px-8 py-2 rounded-md transition-all duration-300 ${
                item ? "bg-black text-white hover:bg-slate-700" : "bg-gray-300"
              }`}
              disabled={!item}
              onClick={onNext}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  };