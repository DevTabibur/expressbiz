import { useContext } from "react";
import { StepperContexts } from "../contexts/StepperContexts";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log('userData', userData)

  return (
    <div className="flex flex-col">


{/* username */}
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-white my-2 p-1 flex-border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      {/* password */}

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          password
        </div>
        <div className="bg-white my-2 p-1 flex-border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            type="password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>



    </div>
  );
};

export default Account;
