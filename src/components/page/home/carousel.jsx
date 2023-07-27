import React from "react";
import { Carousel } from "react-bootstrap"; // Import the Carousel component from react-bootstrap
import sedekahJumat from "../../../assets/img/thumbnail/sedekah jumat.jpg";
import sedekahJumatt from "../../../assets/img/thumbnail/sedekah jumat_2.jpg";
import sedekahSubuh from "../../../assets/img/thumbnail/sedekah subuh.jpg";

export default function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sedekahJumat} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sedekahJumatt} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sedekahSubuh} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
