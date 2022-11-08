import React from 'react'

const FakeData = () => {
  return (
    <>
        <div className="">

{/* stepper */}
<div className="container mx-auto px-4 mt-12">
  <div className="grid md:grid-cols-1">
    <Stepper steps={steps} currentStep={currentStep} />
    {/* Display Components */}
    <div className="my-10 p-10 background">
      <StepperContexts.Provider
        value={{ userData, setUserData, finalData, setFinalData }}
      >
        {displayStep(currentStep)}
      </StepperContexts.Provider>
    </div>
    
  </div>
</div>

{/* Navigation Controls */}
<div className="container  mx-auto px-4 shadow bg-red-500">
  <h1 className="text-accent text-center py-4">Create New Shipping</h1>
  <div className="grid md:grid-cols-1">
    {/* Navigation Controls */}
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
    </>
  )
}

export default FakeData;


import React from "react";

const StepperControls = ({ handleClick, currentStep, steps }) => {
  return (
    <>
      <div className="container flex justify-around my-4">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
        {/* next button */}
        <button
          onClick={() => handleClick("next")}
          className="text-white bg-green-500 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          {currentStep === steps.length -1 ? "Confirm":"Next"}
        </button>
      </div>
    </>
  );
};

export default StepperControls;