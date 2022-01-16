import React from "react";
import PersonDataService from "../../Services/PersonDataService";
import styles from "./Argument.module.css"

class Argument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorname: ""
    };
  }

  componentDidMount() {
    PersonDataService.retrievePerson(this.props.authorId).then(res => {
      this.setState({ authorname: res.data["username"] });
    });
  }

  render() {
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-body" id={styles.card_body}>
              <p>{this.props.text}</p>
            </div>
            <div className="card-footer d-flex justify-content-around align-items-center">
              <p><em className="text-primary">@{this.state.authorname}</em>, {this.props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );}
};

export default Argument;
