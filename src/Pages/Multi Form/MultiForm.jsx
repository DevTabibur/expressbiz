import React, { useState } from "react";
import Stepper from "./Stepper";
import StepperControls from "./StepperControls";
import Account from "./STEPS/Account";
import Complete from "./STEPS/Complete";
import Details from "./STEPS/Details";
import { StepperContexts } from "./contexts/StepperContexts";
import Final from "./STEPS/Final";
import { current } from "daisyui/src/colors";

// 28 minute porjonto sob thik ase, kono code error nai

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Account Information", "Personal Details", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <div className="w-1/2 mx-auto shadow rounded-2xl pb-2 bg-yellow-300">
        {/* stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
          {/* Display Components */}
          <div className="my-10 p-10">
            <StepperContexts.Provider
              value={{ userData, setUserData, finalData, setFinalData }}
            >
              {displayStep(currentStep)}
            </StepperContexts.Provider>
          </div>
        </div>


        {/* Navigation Controls */}
        {current !== steps.length && (
          <StepperControls
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </>
  );
};

export default MultiForm;
