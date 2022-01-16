import React from 'react';
import { Link } from 'react-router-dom';
import TopicDataService from '../../Services/TopicDataService';

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      for_cnt: 0,
      against_cnt: 0
    };
  }

  componentDidMount() {
    TopicDataService.retrieveAllForArguments(this.props.id).then(res => {
      this.setState({ for_cnt: res.data.length });
    });

    TopicDataService.retrieveAllAgainstArguments(this.props.id).then(res => {
      this.setState({ against_cnt: res.data.length });
    });
  }

  render() {
  return (
    <>
      <div className="row mt-2">
        <div className="col">
          <div className="card">
            {/* <h3 className="card-title">Header</h3> */}
            <div className="card-body"><h4>{this.props.title}</h4></div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <Link to={`/discuss/${this.props.id}`} className="btn btn-success">View Topic &#8811;</Link>
              <p className="text-muted">{this.state.for_cnt} for, {this.state.against_cnt} against</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );}
};

export default TopicCard;
