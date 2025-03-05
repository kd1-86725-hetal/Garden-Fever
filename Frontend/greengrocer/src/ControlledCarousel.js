import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/img.jpg";
import img2 from "./images/img2.jpg";
import img4 from "./images/img4.jpg";

function ControlledCarousel() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
      <img 
            className="d-block w-100"
            src={img2}
            alt="Image One"
      /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
            className="d-block w-100"
            src={img2}
            alt="Image two"
      /> 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
            className="d-block w-100"
            src={img2}
            alt="Image three"
      /> 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default ControlledCarousel;