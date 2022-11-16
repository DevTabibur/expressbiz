import "./Process.css";
import process1 from "../../Assets/icons/process-icon1.png";
import process2 from "../../Assets/icons/process-icon2.png";
import process3 from "../../Assets/icons/process-icon3.png";
import process4 from "../../Assets/icons/process-icon4.png";
const Process = () => {
  return (
    <div className="bg-success">
      {/* <!-- component --> */}
      <div className="container py-12 mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-accent">
          OUR SERVICE PROCESS
        </h1>
        <p className="text-center pt-2 pb-6 font-sans">
          or continuous professional and business development, I obtained a{" "}
        </p>
        <div className="relative wrap overflow-hidden md:p-10 ">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full hover:scale-105 duration-500 ease-in-out">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 p-6 hover:scale-105 duration-500 ease-in-out">
              <h3 className="font-bold text-gray-800 text-xl">Select Freight</h3>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full hover:scale-105 duration-500 ease-in-out">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 p-6 hover:scale-105 duration-500 ease-in-out">
              <h3 className="font-bold text-white text-xl">Create Invoice</h3>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full hover:scale-105 duration-500 ease-in-out">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 p-6 hover:scale-105 duration-500 ease-in-out">
              <h3 className="font-bold text-gray-800 text-xl">Secure Payment</h3>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full hover:scale-105 duration-500 ease-in-out">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 p-6 hover:scale-105 duration-500 ease-in-out">
              <h3 className=" font-bold text-white text-xl">Fast Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
