import useActiveUser from "../../Hooks/useActiveUser";
import Loader from "../../Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [userData, userActiveData, isLoading] = useActiveUser();
  const { name, email, profileImage, bio, number } = userActiveData;

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <div className="md:flex flex-row gap-4">
        <div className="basis-3/3">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-md">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">
                  Name : {name}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Email <strong> : </strong> {email}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Phone <strong> : </strong> {number}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {" "}
                  <strong> " </strong> {bio} <strong> " </strong>
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard/edit-profile")}
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="basis-1/3"></div> */}
      </div>
    </>
  );
};

export default Profile;
