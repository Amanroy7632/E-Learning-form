import useProgress from "../../context/useProgress";
import { useState } from "react";
import { Step1} from "./step/Step1";
import { Step2 } from "./step/Step2";
import { Step3 } from "./step/Step3";
import { Step4 } from "./step/Step4";
import { Step5 } from "./step/Step5";
import { Step6 } from "./step/Step6";
import { Step7 } from "./step/Step7";
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
