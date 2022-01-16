import styles from "./Profile.module.css";
import TopicCard from "../../Components/TopicCard/TopicCard";
import { useState,  useEffect } from "react";

import TopicDataService from "../../Services/TopicDataService";

const Profile = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({});
  const [userTopics, setUserTopics] = useState([]);

  useEffect(async () => {
    let data = await TopicDataService.retrieveAllTopicsByUser(1).then(({data}) => data);
    setUserTopics(data);
  });

  const enableInputs = () => setDisabled(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    alert("Saved changes.");
  };
  const handleDelete = () => {
    TopicDataService.deleteTopic(5).then(res => console.log(res));
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h4 className="text-primary">Your profile:</h4>
            <p className="text-secondary">registered on 01.01.2021 
            <a onClick={handleDelete} className="link link-primary">Log Out</a></p>
          </div>

          <form action="/" onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-9">
                <label htmlFor="username" className="form-label">Username:</label>
                <div className="input-group" id="username">
                  <div className="input-group-text">@</div>
                  <input type="text" className="form-control" name="username"
                    onChange={handleChange} value="user123" disabled={disabled} />
                </div>
              </div>
            </div>
            
            <div className="row mt-2 d-flex justify-content-center align-items-center">
              <div className="col-sm-9">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" id="email"
                  onChange={handleChange} value="user123@gmail.com" disabled={disabled} />
              </div>
            </div>
            
            <div className="row mt-2 d-flex justify-content-center align-items-center">
              <div className="col-sm-9">
                <label htmlFor="old_password" className="form-label">Old password:</label>
                <input type="password" className="form-control" name="old_password" id="old_password"
                  onChange={handleChange} disabled={disabled} />
              </div>
            </div>
            
            <div className="row mt-2 d-flex justify-content-center align-items-center">
              <div className="col-sm-9">
                <label htmlFor="new_password" className="form-label">New password:</label>
                <input type="password" className="form-control" name="new_password" id="new_password"
                  onChange={handleChange} disabled={disabled} />
              </div>
            </div>
            
            <div className="row mt-2 d-flex justify-content-center align-items-center">
              <div className="col-sm-9">
                <label htmlFor="confirm_p" className="form-label">Confirm new password:</label>
                <input type="password" className="form-control" name="confirm_p" id="confirm_p"
                  onChange={handleChange} disabled={disabled} />
              </div>
            </div>

            <div className="row mt-2 d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-1">
                  <button type="button" className="btn btn-primary" onClick={enableInputs} disabled={!disabled}>Edit</button>
                </div>
                <div className="col-1" style={{width: 5}}></div>
                <div className="col-1">
                  <button type="submit" className="btn btn-primary" disabled={disabled}>Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="col" id={styles.topics}>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <h3 className="text-secondary">Topics you have proposed: </h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              { userTopics.map(topic => <TopicCard title={topic["text"]} id={topic["id"]} />) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
