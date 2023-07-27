import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../helper/utils";
import "./form-donasi.css";
import { linkPembayaran } from "../../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { setNominal } from "../../../store/slices/donasi";

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

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center mt-5 card-container"
      style={{ minHeight: "100vh" }}
    >
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
