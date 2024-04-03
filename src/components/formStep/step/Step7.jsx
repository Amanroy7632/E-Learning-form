import Heading from "../../heading/Heading";
import computerImg from "../../../svg/computer.svg"
export const Step7 = () => {
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