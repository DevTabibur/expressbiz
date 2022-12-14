import "./Contact.css";
import ContactImage from "../../Assets/images/contact-image.jpg";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Footer from "../../Shared/Footer/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const onSubmit = async (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h592u8a_expressb",
        "template_4wpv3xa",
        form.current,
        "rd2NWclvqL6ALdj-T"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Message Sent",
            icon: "success",
          });
          reset();
        },
        (error) => {
          const err = error.text;
          Swal.fire({
            title: "Something went wrong",
            text: err,
            icon: "success",
          });
        }
      );
  };



  return (
    <>
      <div className="page-title shadow">
        <div className="container mx-auto px-4">
          <div className=" text-center my-12">
            <h2 className="text-4xl font-bold text-white ">
              Contact With Us
            </h2>
            <p className="mb-4 text-center text-sm  text-white">
              You can contact with us via this
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-4">
          {/* first col */}
          <div className="">
            <h1 className="text-accent text-3xl font-bold ">
              WE ARE ALWAYS WITH YOU
            </h1>
            <div className="contact-image my-6">
              <img
                className="rounded shadow-lg"
                src={ContactImage}
                alt="Contact_image"
              />
            </div>
            <div className="border-b-2 mb-6">
              <h2 className="text-accent text-2xl font-bold ">
                QUICK FEEDBACK FORM
              </h2>
            </div>

            {/* form */}
            <form
              ref={form}
              className="bg-neutral p-4 rounded shadow-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* name */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered input-success "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* email */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered input-success "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* company name */}
                <div className="form-control mb-5">
                  <input
                    type="text"
                    placeholder="Company Name / Shop Name"
                    className="input input-bordered input-success "
                    {...register("company")}
                  />
                </div>

                {/* number */}
                <div className="form-control mb-5">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="input input-bordered input-success "
                    {...register("number")}
                  />
                </div>
              </div>

              {/* message */}
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="Write Here"
                  className="textarea textarea-bordered  input-success "
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.message?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.message.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-accent text-white"
                  type="submit"
                  value="SEND MESSAGE"
                ></input>
              </div>
            </form>
          </div>

          {/* second col */}
          <div className="">
            <div className="card m-0 p-0 card-compact w-full bg-neutral">
              <div className="card-body m-0 p-0">
                <h2 className="card-title bg-accent text-white rounded shadow p-2 pl-6 text-center">
                  CORPORATE OFFICE
                </h2>
                <ul className="pl-6">
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faLocation}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      Brisbane , Melbourne
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faEnvelope}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      abc@gmail.com
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faFax}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      +8801307588223
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faPhone}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      +8801307588223
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-12 p-0 card-compact w-full bg-neutral">
              <div className="card-body m-0 p-0">
                <h2 className="card-title bg-accent text-white rounded shadow p-2 pl-6 text-center">
                  SECTION OFFICE
                </h2>
                <ul className="pl-6">
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faLocation}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      Brisbane , Melbourne
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faEnvelope}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      abc@gmail.com
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faFax}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      +8801307588223
                    </p>
                  </li>
                  <li className="my-4 flex  items-center">
                    <FontAwesomeIcon
                      className="text-accent text-2xl"
                      icon={faPhone}
                    />
                    <p className="ml-4 font-semibold text-sm ">
                      +8801307588223
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* google map */}
      <div className="grid md:grid-cols-1">
        <div className="google-map w-full">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453481.3003129021!2d152.71301444953374!3d-27.38125334324952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sbd!4v1667222491893!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
