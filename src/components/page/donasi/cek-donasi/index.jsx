import { useState } from "react";
import Layout from "../../../global/layout";
import "./cek-donasi.css";
import { formatNumber } from "../../../../helper/utils";
import { fetchAPI } from "../../../../helper/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { linkPembayaran } from "../../../../helper/constant";
import {
  setMetodePembayaran,
  setNominal,
} from "../../../../store/slices/donasi";

export default function CekDonasi() {
  const dataAwal = {
    nominal: "",
    nama: "",
    email: "",
    noHandphone: "",
    doa: "",
  };

  const [formData, formDataSet] = useState(dataAwal);

  const selectedNominal = useSelector((state) => state.donasi.selectedNominal);
  const selectedMetode = useSelector((state) => state.donasi.selectedMetode);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    formDataSet((prev) => ({
      ...prev,
      [name]: name === "nominal" ? selectedNominal : value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      data: {
        username: formData.nama,
        donation: selectedNominal,
      },
    };

    try {
      const response = await fetchAPI("/donations", "POST", requestData);

      console.log("Response from API", response);

      toast.success("Data has been successfully added!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Time in milliseconds the notification should be visible
      });
    } catch (error) {
      console.log("error => ", error);
    }

    formDataSet(dataAwal);
    dispatch(setNominal(""));
    dispatch(setMetodePembayaran(""));
  };

  const navigate = useNavigate();

  const handleClickMetode = (e) => {
    e.preventDefault();
    navigate(linkPembayaran);
  };

  const handleInputChange = (e) => {
    const inputNomnial = e.target.value.replace(/\D/g, "");
    dispatch(setNominal(inputNomnial));
  };
  return (
    <Layout>
      <div className="container d-flex flex-column align-items-center py-5">
        <form
          style={{ width: "100%", maxWidth: "650px", minHeight: "100vh" }}
          onSubmit={handelSubmit}
        >
          <div className="p-4 card-container">
            <div className="form-group card-cek p-4">
              <label className="sr-only">Nominal Donasi </label>
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">Rp. </div>
                </div>
                <input
                  type="text"
                  name="nominal"
                  className="form-control"
                  value={
                    selectedNominal !== null
                      ? formatNumber(selectedNominal)
                      : ""
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="py-4">
              <label>Metode Pembayaran</label>
              <div className="d-flex card-cek mt-2 align-items-center justify-content-between">
                <p className="m-0">Via {selectedMetode}</p>
                <button
                  className="btn btn-warning"
                  style={{ borderRadius: "20px" }}
                  onClick={handleClickMetode}
                >
                  Ubah
                </button>
              </div>
            </div>
            <div className="form-group mt-2">
              <label>
                Nama <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="nama"
                className="form-control"
                style={{
                  width: "100%",
                  backgroundColor: "#f6f6f6",
                  border: "#f6f6f6",
                }}
                value={formData.nama}
                onChange={handleChange}
                required
              />
              <hr style={{ marginTop: "-1px", width: "100%" }} />
            </div>
            <div className="form-group mt-5">
              <label>
                Email <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                style={{
                  width: "100%",
                  backgroundColor: "#f6f6f6",
                  border: "#f6f6f6",
                }}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <hr style={{ marginTop: "-1px" }} />
            </div>
            <div className="form-group mt-5">
              <label>
                No. Handphone <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="number"
                name="noHandphone"
                className="form-control"
                style={{
                  width: "100%",
                  backgroundColor: "#f6f6f6",
                  border: "#f6f6f6",
                }}
                value={formData.noHandphone}
                onChange={handleChange}
                required
              />
              <hr style={{ marginTop: "-1px" }} />
            </div>
            <div className="form-group mt-5">
              <label>Doa Terbaik Anda </label>
              <textarea
                name="doa"
                rows={2}
                className="form-control"
                style={{
                  width: "100%",
                  backgroundColor: "#f6f6f6",
                  border: "#f6f6f6",
                }}
                value={formData.doa}
                onChange={handleChange}
              />
              <hr style={{ marginTop: "-1px" }} />
            </div>
          </div>
          <button
            style={{ width: "100%", borderRadius: 20 }}
            className="btn btn-info text-white mt-4"
            type="submit"
          >
            Bayar Sekarang
          </button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
}
