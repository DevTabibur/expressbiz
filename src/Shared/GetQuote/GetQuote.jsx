import "./GetQuote.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const GetQuote = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const isActive = localStorage.getItem("user_id");
  const onSubmit = async (data, e) => {
    console.log(data);
    // if (!isActive) {
    //   // if user is not login / register.. they can't provide quotation
    //   Swal.fire({
    //     title: "Login / Registration first",
    //     text: "You have to create a account before quotation",
    //     icon: "error",
    //   });
    // } else {
    //   const url = `http://localhost:5000/quote`;
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("quotation data send and get", data);
    //       if (data.acknowledged) {
    //         // for successfully provide quotation
    //         Swal.fire({
    //           title: "Quotation sent",
    //           icon: "success",
    //         });
    //         // for resetting form data
    //         reset();
    //       }
    //     });
    // }
  };
  return (
    <>
      <div className="quote">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            {/* first col */}
            <div className="quote-left-col">
              <h1 className="text-white font-bold font-sans md:text-5xl py-4">
                GET A FREE QUOTE
              </h1>
              <p className="text-accent font-bold font-sans pb-4">
                WE ALWAYS USE BEST & FASTEST FLEETS
              </p>
              <Link className="btn btn-md btn-accent" to="/shipping">
                GET QUOTE
              </Link>
            </div>

            <div className="hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuote;
