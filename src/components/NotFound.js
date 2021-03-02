import not_found from "../images/not-found.svg";

const NotFound = () => {
  return (
    <div className="notfound bg-gray-100 flex px-5 items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center  text-gray-700">
        <div className="max-w-md">
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
        </div>
        <div className="max-w-lg">
          <img src={not_found} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
