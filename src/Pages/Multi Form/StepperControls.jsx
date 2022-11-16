import React from "react";

const StepperControls = ({ handleClick, currentStep, steps }) => {
  return (
    <>
      <div className="container md:flex  my-4">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-8 rounded mr-6 font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
        {/* next button */}
        <button
          onClick={() => handleClick("next")}
          className="text-white bg-green-500 uppercase py-2 px-8 rounded font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          {currentStep === steps.length -1 ? "Confirm":"Next"}
        </button>

        {/* <input
          className="btn btn-accent text-white mt-4 px-12 py-4"
          type="submit"
          value="SUBMIT"
          onClick={() => handleClick("next")}
        ></input> */}
      </div>
    </>
  );
};

export default StepperControls;
