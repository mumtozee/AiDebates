import { Link } from 'react-router-dom';

const TopicCard = (props) => {
  return (
    <>
      <div className="row mt-2">
        <div className="col">
          <div className="card">
            {/* <h3 className="card-title">Header</h3> */}
            <div className="card-body"><h4>{props.topic_title}</h4></div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <Link to="/discuss" className="btn btn-success">View Topic &#8811;</Link>
              <p className="text-muted">{props.for_cnt} for, {props.against_cnt} against</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicCard;
