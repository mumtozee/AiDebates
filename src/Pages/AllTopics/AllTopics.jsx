import Thumbnail from "../../Components/Thumbnail/Thumbnail";

const AllTopics = () => {
  return (
    <>
      <div className="row">
        <form action="/" className="d-flex flex-row align-items-center justify-content-center">
          <div className="col-sm-7">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Type topic name to search" name="topic_search" />
              <button type="submit" className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-2">
        <div className="d-flex justify-content-evenly">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
      <div className="row mt-2">
        <div className="d-flex justify-content-evenly">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
      <div className="row mt-2 mb-5">
        <div className="d-flex justify-content-evenly">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </>
  );
};

export default AllTopics;
