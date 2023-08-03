import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategorySedekah } from "../../../store/slices/donasi";
import { linkDonasi } from "../../../helper/constant";

export default function CardProgramLain({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelOnClick = (item) => {
    dispatch(setCategorySedekah(item));
    navigate(linkDonasi);
  };

  return (
    <>
      {data.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <img
            className="card-img-top"
            src={`http://192.168.15.62:1337${item.attributes.pictures.data.attributes.url}`}
            alt="Card image cap"
          />

          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{item.attributes.category}</h5>
            <p className="card-text text-center">
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </p>
            <button
              className="btn btn-info text-light"
              style={{ width: "100%", maxWidth: "90%" }}
              onClick={() => handelOnClick(item)}
            >
              <h6> SEDEKAH SEKARANG</h6>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
