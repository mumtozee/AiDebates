import styles from './HotTopics.module.css'

import TopicCard from "../../Components/TopicCard/TopicCard";
import AdsCarousel from '../../Components/AdsCarousel/AdsCarousel';
import { Component } from 'react';
import TopicDataService from '../../Services/TopicDataService';

class HotTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hot_topics: []
    };
  }

  componentDidMount() {
    TopicDataService.retrieveAllTopics().then(res => this.setState({ hot_topics: res.data }));
  }

  render() {
  return (
    <>
      <div className="row">
        <div className="col" id={styles.topics}>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <h3 className="text-secondary">Topics of the week: </h3>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              { this.state.hot_topics.map(topic => <TopicCard title={topic["text"]} id={topic["id"]} />) }
            </div>
          </div>
        </div>
        <div className="col mt-3">
          <AdsCarousel />
        </div>
      </div>
    </>
  );}
};

export default HotTopics;
