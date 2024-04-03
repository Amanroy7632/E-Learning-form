import { useState } from "react";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import FormComponent from "./components/formStep/FormComponent";
import { ProgressContextProvider } from "./context/useProgress";
import leftArrow from "./svg/left.png"

function App() {

  const borderColor="border-blue-600"
  const [count, setCount] = useState(10);
  const[step,setStep]=useState(1);
  const nextProgress = () => {
    console.log(`Count: ${count}`);
    if (count < 100 && count!=70) {
      setCount(count + 20)
      setStep(step+1)
    }
    else if(count===70 && count<100){
       setCount(count + 30);
       setStep(step+1)
    }else{
      setStep(step+1)
    }
    console.log(`Step: ${step}`);
  };
  const prevProgress = () => {
    if(count>0 && count===100 ){
      setStep(step-1)
      setCount(count - 30);
   }
   else if (count > 20) {
    setCount(count - 20);
    setStep(step-1)
  }else{
    setStep(step-1)
  }
   console.log(`Step down: ${step} && count: ${count}`);
  };
  const [isVisible,setVisible]=useState(true)
  return (
    <ProgressContextProvider value={{step,isVisible,setVisible,count,nextProgress,prevProgress}}>
    <BrowserRouter>
      <div>
        <Header />
       {isVisible?( <div className=" progress-bar w-screen h-5  mt-[13vh] max-sm:mt-[11vh] p-5 flex justify-center items-center">
          <div className="back-btn flex justify-center items-center">
            {count !== 10 ? (
              <button
                onClick={prevProgress}
                className=" w-12 pr-4 text-3xl font-bold flex justify-center items-center"
              >
                <img src={leftArrow} alt="" className=" " />
              </button>
            ) : (
              ""
            )}
          </div>
          <div className=" w-[80%] max-sm:w-[90%] h-3 bg-gray-300 rounded-md overflow-hidden">
            <div
              className={`bg-green-700 h-3 flex justify-center transition-all duration-200`}
              style={{ 
                width: `${count}%`}}
            ></div>
          </div>
        </div>):""}
        <FormComponent  />
      </div>
    </BrowserRouter>
    </ProgressContextProvider>
  );
}

export default App;
