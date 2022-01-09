import styles from './HotTopics.module.css'

import TopicCard from "../../Components/TopicCard/TopicCard";
import AdsCarousel from '../../Components/AdsCarousel/AdsCarousel';

const HotTopics = () => {
  return (
    <>
      <div className="row">
        <div className="col" id={styles.topics}>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <h3 className="text-secondary">Topics of the week: </h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <TopicCard topic_title="Is cyber-bullying a real problem?" for_cnt={34} against_cnt={45} />
              <TopicCard topic_title="Are your for or against school uniforms?" for_cnt={2} against_cnt={5} />
              <TopicCard topic_title="Studying abroad" for_cnt={106} against_cnt={12} />
            </div>
          </div>
        </div>
        <div className="col mt-3">
          <AdsCarousel />
        </div>
      </div>
    </>
  );
};

export default HotTopics;
