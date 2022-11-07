import LoaderImage from "../../Assets/images/Color-Loading-2.gif";

const Loader = () => {
  return (
    <>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={LoaderImage} alt="Loader_image" />
        </div>
      </div>
    </>
  );
};

export default Loader;
