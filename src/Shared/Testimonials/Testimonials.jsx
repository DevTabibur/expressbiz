import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="md:grid grid-cols-1 gap-4">
          <div className="mb-6">
            {/* stat */}
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src="https://placeimg.com/128/128/people" />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>

            {/* stat end here */}
          </div>
        </div>

        {/* Testimonials */}
        <div className="md:grid grid-cols-2 gap-4">
          {/* first col */}
          <div className="">
            এখনো ডিজাইন করা বাকি / 
          </div>

          {/* second col */}
          <div>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <div className="relative">
                    <section
                      className="md:p-6  text-center md:text-left shadow-lg rounded-md"
                      style={{
                        backgroundImage:
                          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)",
                      }}
                    >
                      <div className="md:flex justify-center">
                        <div className="md:w-full">
                          <div className="block md:p-6 rounded-lg shadow-lg bg-white m-4 relative">
                            <div className="md:flex md:flex-row">
                              <div className="md:w-96  md:flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                  className="rounded-full shadow-md"
                                  alt="woman avatar"
                                />
                              </div>
                              <div className="md:ml-6">
                                <p className="text-gray-500 font-light mb-6">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Id quam sapiente molestiae
                                  numquam quas, voluptates omnis nulla ea odio
                                  quia similique corrupti magnam.
                                </p>
                                <p className="font-semibold text-xl mb-2 text-gray-800">
                                  Anna Smith
                                </p>
                                <p className="font-semibold text-gray-500 mb-0">
                                  Product manager
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="carousel-item relative float-left w-full">
                  <div className="relative">
                    <section
                      className="md:p-6  text-center md:text-left shadow-lg rounded-md"
                      style={{
                        backgroundImage:
                          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)",
                      }}
                    >
                      <div className="md:flex justify-center">
                        <div className="md:w-full">
                          <div className="block md:p-6 rounded-lg shadow-lg bg-white m-4 relative">
                            <div className="md:flex md:flex-row">
                              <div className="md:w-96  md:flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                  className="rounded-full shadow-md"
                                  alt="woman avatar"
                                />
                              </div>
                              <div className="md:ml-6">
                                <p className="text-gray-500 font-light mb-6">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Id quam sapiente molestiae
                                  numquam quas, voluptates omnis nulla ea odio
                                  quia similique corrupti magnam.
                                </p>
                                <p className="font-semibold text-xl mb-2 text-gray-800">
                                  Anna Smith
                                </p>
                                <p className="font-semibold text-gray-500 mb-0">
                                  Product manager
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div className="relative">
                    <section
                      className="md:p-6  text-center md:text-left shadow-lg rounded-md"
                      style={{
                        backgroundImage:
                          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)",
                      }}
                    >
                      <div className="md:flex justify-center">
                        <div className="md:w-full">
                          <div className="block md:p-6 rounded-lg shadow-lg bg-white m-4 relative">
                            <div className="md:flex md:flex-row">
                              <div className="md:w-96  md:flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                  className="rounded-full shadow-md"
                                  alt="woman avatar"
                                />
                              </div>
                              <div className="md:ml-6">
                                <p className="text-gray-500 font-light mb-6">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Id quam sapiente molestiae
                                  numquam quas, voluptates omnis nulla ea odio
                                  quia similique corrupti magnam.
                                </p>
                                <p className="font-semibold text-xl mb-2 text-gray-800">
                                  Anna Smith
                                </p>
                                <p className="font-semibold text-gray-500 mb-0">
                                  Product manager
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
