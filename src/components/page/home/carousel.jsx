import { Carousel } from "react-bootstrap";
import sedekahJumat from "../../../assets/img/thumbnail/sedekahJumat.png";
import sedekahJumatt from "../../../assets/img/thumbnail/sedekahJumat2.png";
import sedekahSubuh from "../../../assets/img/thumbnail/sedekah subuh2.png";
import sedekahSubuh2 from "../../../assets/img/thumbnail/sedekah subuh.png";

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
      <Carousel.Item>
        <img className="d-block w-100" src={sedekahSubuh2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
