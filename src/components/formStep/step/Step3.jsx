export const Step3 = ({ onNext }) => {
    // const { nextProgress, prevProgress, count } = useProgress();
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