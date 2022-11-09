import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import StepperControls from "./StepperControls";
import Account from "./STEPS/Account";
import Complete from "./STEPS/Complete";
import Details from "./STEPS/Details";
import { StepperContexts } from "./contexts/StepperContexts";
import Final from "./STEPS/Final";
import { current } from "daisyui/src/colors";
import "./MultiForm.css";
import WhereFrom from "./STEPS/WhereFrom";
import WhereGoing from "./STEPS/WhereGoing";
import What from "./STEPS/What";
import How from "./STEPS/How";
import Payment from "./STEPS/Payment";
import Review from "./STEPS/Review";

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Where from",
    "where going",
    "what",
    "payment",
    "review",
    "complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <WhereFrom />;
      case 2:
        return <WhereGoing />;
      case 3:
        return <What />;
      case 4:
        return <Payment />;
      case 5:
        return <Review />;
      case 6:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    // e.preventDefault()
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // send userData to server
  useEffect(() => {
    const url = `http://localhost:5000/create-shipping`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userData: userData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("use create shipping hook posted data", data);
      });
  }, [userData]);

  return (
    <div className="">
      {/* stepper */}
      <div className="container mx-auto px-4 mt-12">
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

              <div className="mt-6 mb-4">
                {current !== steps.length && (
                  <StepperControls
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
