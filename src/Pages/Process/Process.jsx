import "./Process.css";
import process1 from "../../Assets/icons/process-icon1.png";
import process2 from "../../Assets/icons/process-icon2.png";
import process3 from "../../Assets/icons/process-icon3.png";
import process4 from "../../Assets/icons/process-icon4.png";
const Process = () => {
  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-center">
          OUR SERVICE PROCESS
        </h1>
        <p className="text-center pt-2 pb-6 font-sans">
          or continuous professional and business development, I obtained a{" "}
        </p>
        <div className="grid md:grid-cols-4 gap-0">
          <div className="process text-center">11</div>

          <div>22</div>
          <div>33</div>
          <div>44</div>
        </div>
      </div>
    </div>
  );
};

export default Process;
