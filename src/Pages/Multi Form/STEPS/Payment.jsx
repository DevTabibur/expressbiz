import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";

const Payment = () => {

  const { userData, setUserData } = useContext(StepperContexts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const shippingGoing = data;
    setUserData({ ...userData, shippingGoing });
    reset();
  };

  console.log("payment data", userData);
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          How would like to pay?
        </h1>
        <p className="text-neutral-focus font-mono mb-8">
          *indicates require file
        </p>
        
      </div>
    </>
  )
}

export default Payment