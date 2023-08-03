import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../helper/utils";
import "./formDonasi.css";
import { linkBeranda, linkPembayaran } from "../../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { setNominal } from "../../../store/slices/donasi";
import sedekahJumat from "../../../assets/img/thumbnail/sedekahJumat.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function FormDonasi() {
  const nominal = [
    {
      id: 1,
      nominal: 20000,
    },
    {
      id: 2,
      nominal: 30000,
    },
    {
      id: 3,
      nominal: 40000,
    },
    {
      id: 4,
      nominal: 50000,
    },
  ];

  const dispatch = useDispatch();
  const selectedNominal = useSelector((state) => state.donasi.selectedNominal);
  const selectedSedekahCategories = useSelector(
    (state) => state.donasi.selectedSedekahCategories
  );

  console.log(selectedSedekahCategories);

  const navigate = useNavigate();

  const handelOnClick = (item) => {
    dispatch(setNominal(item.nominal));
    navigate(linkPembayaran);
  };

  const handleInputChange = (e) => {
    const inputNominal = e.target.value;
    dispatch(setNominal(inputNominal));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(linkPembayaran);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    navigate(linkBeranda);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center mt-5 card-container"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4" onClick={handleCategory}>
        {selectedSedekahCategories !== null ? (
          <div className="d-flex gap-4">
            <img
              src={`http://192.168.15.62:1337${selectedSedekahCategories.attributes.pictures.data.attributes.url}`}
              style={{ width: "100%", maxWidth: "30%", borderRadius: 5 }}
            />
            <div className="mt-3">
              <p>Anda akan bersedekah untuk :</p>
              <h5> {selectedSedekahCategories.attributes.category}</h5>
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{
                fontSize: "1.5rem",
                alignSelf: "center",
                marginLeft: "auto",
              }}
            />
          </div>
        ) : (
          <div className="d-flex gap-4">
            <img
              src={sedekahJumat}
              style={{ width: "100%", maxWidth: "30%", borderRadius: 5 }}
            />
            <div className="mt-3">
              <p>Anda akan bersedekah :</p>
              <h5>Sedekah Jumat</h5>
            </div>
          </div>
        )}
      </div>
      {nominal.map((item) => (
        <div
          key={item.id}
          className="p-4 card mt-3"
          onClick={() => handelOnClick(item)}
        >
          <label style={{ cursor: "pointer" }}>
            Rp. {formatNumber(item.nominal)},-
          </label>
        </div>
      ))}
      <div className="d-flex flex-column card gap-4 mt-3">
        <div className="form-group p-4">
          <label className="sr-only">Nominal Lainnya :</label>
          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <div className="input-group-text">Rp. </div>
            </div>
            <input
              type="number"
              name="nominal"
              className="form-control"
              value={selectedNominal !== null ? selectedNominal : ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-info mt-4 text-white"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "20px",
          padding: "10px 50px",
        }}
        onClick={handleFormSubmit}
      >
        Lanjutkan Pembayaran
      </button>
    </div>
  );
}
