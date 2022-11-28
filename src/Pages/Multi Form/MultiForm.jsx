import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import StepperControls from "./StepperControls";
import Account from "./STEPS/Account";
import Details from "./STEPS/Details";
import { StepperContexts } from "./contexts/StepperContexts";
import Final from "./STEPS/Complete";
import { current } from "daisyui/src/colors";
import "./MultiForm.css";
import WhereFrom from "./STEPS/WhereFrom";
import WhereGoing from "./STEPS/WhereGoing";
import What from "./STEPS/What";
import How from "./STEPS/How";
import Review from "./STEPS/Review";
import useActiveUser from "../../Hooks/useActiveUser";
import useAdmin from "../../Hooks/useAdmin";
import Swal from "sweetalert2";
import DestinationMap from "./STEPS/DestinationMap";

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [activeUser, activeUserData] = useActiveUser();

  const [admin] = useAdmin(activeUserData);

  const steps = [
    "Where from",
    "where going",
    "what & How",
    "review",
    "complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <WhereFrom
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <WhereGoing
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 3:
        return (
          <What
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 4:
        return (
          <Review
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 5:
        return (
          <Final
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      default:
    }
  };

  const handleClick = (direction) => {
    // checking condition if the form value is filled or not
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="bg-success">
      {/* stepper */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 ">
          <div>
            <Stepper steps={steps} currentStep={currentStep} />
            {/* Display Components */}
            <div className="container mx-auto px-4 mt-14 background pb-4">
              <StepperContexts.Provider
                value={{ userData, setUserData, finalData, setFinalData }}
              >
                {displayStep(currentStep)}
              </StepperContexts.Provider>
              {/* Navigation Controls */}

              {/* <div className="mt-6 mb-4">
                {current !== steps.length && (
                  <StepperControls
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
