import { Component } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";

import TopicDataService from "../../Services/TopicDataService";

class AllTopics extends Component {
  state = {
    rows: []
  };

  constructor(props) {
    super(props);
    this.initThumbnailRows();
  }

  initThumbnailRows = async () => {
    let data = await TopicDataService.retrieveAllTopics().then(({data}) => data);
    let row_list = [];
    for (var i = 0; i < data.length; i += 4) {
      let slice_end = (i + 4 > data.length) ? i + (data.length % 4) : i + 4;
      let tmp_slice = data.slice(i, slice_end);
      
      row_list.push(
        <div className="row mt-2">
          <div className="d-flex justify-content-evenly">
            { tmp_slice.map(topic => <Thumbnail title={topic["text"]} id={topic["id"]} />) }
          </div>
        </div>
      );
    }
    this.setState({ rows: row_list });
    console.log(this.state.rows);
  };

  render() {
  return (
    <>
      <div className="row">
        <form action="/" className="d-flex flex-row align-items-center justify-content-center">
          <div className="col-sm-7">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Type topic name to search" name="topic_search" />
              <button type="button" className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
      </div>

      {this.state.rows.map(row => row)}
      <div className="row mb-5"></div>
    </>
  );}
};

export default AllTopics;
