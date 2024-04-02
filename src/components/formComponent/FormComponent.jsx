import Form from "../form/Form";
import useProgress from "../../context/useProgress";
import Heading from "../heading/Heading";
import mathImg from "./math.png";
import algebraImg from "./algebra.png";
import { useState } from "react";
import logoImg from "./logo.png";
import computerImg from "./../../svg/computer.svg";

const Step1 = () => {
  const formData = [
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 1,
      label: {
        title: "Student",
      },
      input: {
        value: "Student",
        placeholder: "or soon to be enrolled",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 2,
      label: {
        title: "Professional",
      },
      input: {
        value: "Professional",
        placeholder: "pursuing a career",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 3,
      label: {
        title: "Parent",
      },
      input: {
        value: "Parent",
        placeholder: "of a school-age-child",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 4,
      label: {
        title: "Lifelong learner",
      },
      input: {
        value: "Lifelong learner",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 5,
      label: {
        title: "Teacher",
      },
      input: {
        value: "Teacher",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 6,
      label: {
        title: "Other",
      },
      input: {
        value: "Other",
        placeholder: "",
      },
    },
  ];
  const headingData = {
    title: " Which describes you best?",
    description: "This will help us personalize your experience.",
  };
  return (
    <>
      <Heading data={headingData} />
      <Form formData={formData} borderColor={"border-blue-400"} />
    </>
  );
};

const Step2 = () => {
  const formData2 = [
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 1,
      label: {
        title: "Learning Specific skills to advance my career",
      },
      input: {
        value: "Learning Specific skills to advance my career",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 2,
      label: {
        title: "Explorating new topics I'm intrested in",
      },
      input: {
        value: "Explorating new topics I'm intrested in",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 3,
      label: {
        title: "Refreshing my math foundations",
      },
      input: {
        value: "Refreshing my math foundations",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 4,
      label: {
        title: "Exercising my brain to stay sharp",
      },
      input: {
        value: "Exercising my brain to stay sharp",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 5,
      label: {
        title: "Something else",
      },
      input: {
        value: "Something else",
        placeholder: "",
      },
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zM18zZF9jaGFyYWN0ZXJfc3R1ZGVudF90aGlua2luZ19hYm91dF9zb21ldGhpbl84ODY4NGYxZC00MDdmLTQwOWYtOWY5Mi1iNmQ3NzViNjFmNDRfMS5wbmc.png",
      id: 6,
      label: {
        title: "Other",
      },
      input: {
        value: "Other",
        placeholder: "",
      },
    },
  ];
  const headingData = {
    title: "Which are you most intrested in ?",
    description:
      "Choose just one. This will helps us get you started (but won't limit your experience)",
  };
  return (
    <>
      <Heading data={headingData} />
      <Form formData={formData2} borderColor={"border-green-400"} />
    </>
  );
};

const Step3 = ({ onNext }) => {
  const { nextProgress, prevProgress, count } = useProgress();
  return (
    <div className="p-4 my-4 rounded-md border flex justify-center items-center">
      <div className=" w-[80%] flex justify-evenly items-center max-md:flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_NF9I6nRJS9gRcVESvCfakbpFE7LwxqZUA&usqp=CAU" alt="" />
        <div>
          <div className=" w-[80%] py-[25%]">
            <h1 className=" text-3xl font-semibold py-5">
              You're in the right place
            </h1>
            <p>
              Brillent gets you hands on to help improve your Professional
              skills and knowledge.
            </p>
          </div>
          <button
            className={` border  px-8 py-2 rounded-md bg-black text-white hover`}
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
const Step4 = ({ onNext }) => {
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

const Step5 = ({ onNext, loading, setLoading }) => {
  return (
    <>
      <div>
        <div className="main-container  flex justify-center items-center flex-col">
          <div className=" w-[80%]  flex justify-center gap-5 items-center max-md:flex-col max-sm:w-[90%] ">
            <div className=" image">
              <img src={logoImg} alt="logo avtar" />
            </div>
            <div className=" flex justify-center items-center">
              <div className="content w-[80%]">
                <h1>You're on your way!</h1>
                <div className="flex items-center mt-2.5 mb-5 max-sm:mt-1.2 max-sm:mb-1">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-300 mr-1"
                    fill="currentColor"
                  >
                    <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"></span>
                </div>
                <p>
                  Through its engaging and well structured courses ,Brillient
                  has taught me mathematical conceptsthat I previously struggled
                  to undestan.
                </p>
              </div>
            </div>
          </div>
          <div className=" pt-[5%]">
            <button
              className={` border  px-8 py-2 rounded-md bg-black text-white hover`}
              onClick={onNext}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const Step6 = () => {
  const { setVisible, nextProgress } = useProgress();
  setVisible(false);
  setTimeout(() => {
    nextProgress();
    console.log("Hello We are running");
  }, 2500);
  return (
    <>
      <div className=" w-screen h-screen border flex justify-center items-center flex-col">
        <div className="">
          <div className="">
            <svg
              class="animate-spin h-16 w-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="darkGray"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="#D29D00"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        <div className=" w-[50%] max-sm:w-[80%] pt-5">
          <p className=" text-center text-2xl font-semibold">
            Finding learning path recommendations for you based on your response
          </p>
        </div>
        {/* <Heading data={headingData} /> */}
      </div>
    </>
  );
};
const Step7 = () => {
  const headingData = {
    title:
      "Learning path based on your answers",
    description: "Choose one to get started.You can switch anytime.",
  };
  const data = [
    {
      id: 1,
      title:
        "Foundational math Build your foundational skills in algebra , geometry ,and probability.",
      isPopular: true,
    },
    {
      id: 2,
      title: "Mathematical thinking build your foundational skills in algebra ,geometry, and probability.",
      isPopular: false,
    },
  ];
  return (
    <div className=" mt-[10vh] flex justify-center items-center">
      <div className=" flex justify-between items-center flex-col w-[70%] max-md:w-[90%] max-sm:w-full">
        <Heading data={headingData} />
        <div className="flex justify-between items-center w-[80%] max-md:p-5 p-10 max-sm:p-0 gap-5 max-md:flex-col max-sm:w-[90%]">
          {data.map((data) => (
            <div
              key={data.id}
              className="item flex justify-center relative border p-5 rounded-md"
            >
              {data.isPopular ? (
                <div className=" absolute top-[-12px] border bg-yellow-600 px-2 rounded-[5rem] font-bold text-sm">
                  Popular
                </div>
              ) : (
                ""
              )}
              <div className=" w-[50%] ">
                <p>{data.title}</p>
              </div>
              <div className=" w-[40%]">
                <img src={computerImg} alt="" className=" w-[10rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FormComponent = () => {
  const { nextProgress, count, step } = useProgress();
  const [loading, setLoading] = useState(false);
  const handleNextStep = () => {
    nextProgress();
    // setStep(step+1)
    // setVisible(false)
    console.log(count);
  };

  return (
    <div className="container">
      {count === 10 && step === 1 && <Step1  />}
      {count === 30 && step === 2 && <Step2  />}
      {count === 50 && step === 3 && <Step3 onNext={handleNextStep} />}
      {count === 70 && step === 4 && <Step4 onNext={handleNextStep} />}
      {count === 100 && step === 5 && (
        <Step5
          onNext={handleNextStep}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {step === 6 && count === 100 && <Step6/>}
      {step === 7 && count === 100 && <Step7 />}
    </div>
  );
};

export default FormComponent;
