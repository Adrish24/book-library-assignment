const Loader = () => {
  return (
    <div className="m-auto flex flex-col justify-center items-center">
      <span className="loading loading-spinner loading-xl mb-2"></span>
      <p>Fetching data from books API...</p>
    </div>
  );
};

export default Loader;
