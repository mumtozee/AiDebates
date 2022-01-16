import { Component, useState } from "react";
import Argument from "../../Components/Argument/Argument";

import { Modal } from "react-bootstrap";

import TopicDataService from "../../Services/TopicDataService";
import PersonDataService from "../../Services/PersonDataService";
import ArgumentDataService from "../../Services/ArgumentDataService";

import { useParams } from "react-router-dom";

class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      topic: {},
      author: {},
      for_args: [],
      against_args: [],
      arg_body: ""
    };
  }

  componentDidMount() {
    let id = this.props.params.id;
    TopicDataService.retrieveTopic(id).then(res => {
      this.setState({ topic: res.data });
      PersonDataService.retrievePerson(this.state.topic["authorId"]).then(res2 => {
        this.setState({ author: res2.data });
      });
    });

    TopicDataService.retrieveAllForArguments(id).then(res => {
      this.setState({ for_args: res.data });
    });

    TopicDataService.retrieveAllAgainstArguments(id).then(res => {
      this.setState({ against_args: res.data });
    });
  }

  render() {
  const { show } = this.state;
  const setShow = value => this.setState({ show: value });
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { arg_body } = this.state;
  const setArgBody = value => this.setState({ arg_body: value });

  const handleChange = (event) => {
    setArgBody(event.target.value);
  };
  
  const getRandomInt = (max) => {return Math.floor(Math.random() * max)};

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFor = [true, false];
    let date = new Date();
    let dateString = date.getUTCFullYear() + "-"
      + ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-"
      + ("0" + date.getUTCDate()).slice(-2);

    let argument = {
      isFor: isFor[getRandomInt(2)],
      authorId: 1,
      topicId: this.props.params.id,
      content: this.state.arg_body,
      publishedDate: dateString
    };

    ArgumentDataService.createTopic(argument).then(res => console.log(res));
    setShow(false);
  };
  console.log(this.state);

  return (
    <>
      <div className="row">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="display-6">{this.state.topic["text"]}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            proposed by <em className="text-primary">@{this.state.author["username"]}</em> on {this.state.topic["publishedDate"]}
          </figcaption>
          <button className="btn btn-primary" display="none" onClick={handleShow}>Express Yourself!</button>
        </figure>
        
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/plus.jpg`} width={28} />
          </div>
        </div>
        
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/minus.jpg`} width={28} />
          </div>
        </div>
      </div>

      <div className="row mt-2 mb-5">
        <div className="col border-end">
          {this.state.for_args.map(arg => <Argument authorId={arg["authorId"]} 
          text={arg["content"]} date={arg["publishedDate"]} />)}
        </div>

        <div className="col">
          {this.state.against_args.map(arg => <Argument authorId={arg["authorId"]} 
          text={arg["content"]} date={arg["publishedDate"]} />)}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <form action="/" onSubmit={handleSubmit}>
          <Modal.Body>
            <p>Provide your arguments and facts in the area below and the neural
              network will define wether you are for or against the thesis:</p>
            <textarea className="form-control" name="argument" onChange={handleChange} rows={5}></textarea>
          </Modal.Body>

          <Modal.Footer>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={handleClose} />
            <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );}
};

const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

export default withRouter(Discussion);
