import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { linkArtikel } from "../../../helper/constant";
import { setArticle } from "../../../store/slices/article";

export default function CardArtikel({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelOnClick = (item) => {
    dispatch(setArticle(item));
    navigate(linkArtikel);
    // console.log(item);
  };

  function limitWords(text, wordLimit) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }

  return (
    <>
      {data.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <img
            className="card-img-top"
            src={`http://192.168.15.62:1337${item.attributes.pic.data.attributes.url}`}
            alt="Card image cap"
          />

          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-center">{item.attributes.title}</h5>
            <p>{limitWords(item.attributes.article_content, 20)}</p>
            <button
              className="btn btn-info text-light"
              style={{ width: "100%", maxWidth: "90%" }}
              onClick={() => handelOnClick(item)}
            >
              <h6> Baca Selengkapnya</h6>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
