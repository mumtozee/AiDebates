import { Link } from 'react-router-dom';
import styles from './Thumbnail.module.css';

const getRandomInt = (max) => {return Math.floor(Math.random() * max)};

const Thumbnail = () => {
  const asset_path = `${process.env.PUBLIC_URL}/assets/`;
  let images = ["questions1", "questions2", "nn", "nn2"];
  return (
    <>
      <div className="card" id={styles.thumbnail_card}>
        <img src={asset_path + images[getRandomInt(images.length)] + ".jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor set amit</h5>
          <Link to="/discuss" className="btn btn-success">View Topic &#8811;</Link>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
