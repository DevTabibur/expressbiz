import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoClientReviews = ({ review, deleteReview }) => {
  // const { reviewer, review, email, name, author } = review;
  return (
    <>
      <div className="px-3 md:w-1/3">
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
          <div className="w-full flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <img
                src="https://placeimg.com/192/192/people"
                alt="place_image"
              />
            </div>
            <div className="flex-grow pl-3">
              <h6 className="font-bold text-sm uppercase text-gray-600">
                {review?.reviewer}
              </h6>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm leading-tight">
              <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                "
              </span>
              {review?.review}
              <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                "
              </span>
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => deleteReview(review?._id)}
                className="btn btn-sm bg-accent hover:shadow text-white transition duration-150 hover:bg-primary hover:text-accent"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoClientReviews;
