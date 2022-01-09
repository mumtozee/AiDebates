import { Carousel } from "react-bootstrap";

const AdsCarousel = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img 
            className="d-block w-100 rounded"
            src={`${process.env.PUBLIC_URL}/assets/nn.jpg`}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100 rounded"
            src={`${process.env.PUBLIC_URL}/assets/nn2.jpg`}
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            className="d-block w-100 rounded"
            src={`${process.env.PUBLIC_URL}/assets/nn3.jpg`}
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            className="d-block w-100 rounded"
            src={`${process.env.PUBLIC_URL}/assets/nn4.jpg`}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default AdsCarousel;
