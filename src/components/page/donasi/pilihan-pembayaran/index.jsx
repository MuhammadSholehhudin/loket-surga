import ovo from "../../../../assets/img/ovo-logo.svg";
import dana from "../../../../assets/img/dana-logo.svg";
import linkaja from "../../../../assets/img/linkaja-logo.svg";
import qris from "../../../../assets/img/qris-logo.svg";
import alfamart from "../../../../assets/img/alfamart-logo.svg";
import shopee from "../../../../assets/img/shopeepay-logo.svg";
import gopay from "../../../../assets/img/gopay-logo.svg";
import Layout from "../../../global/layout";
import { useNavigate } from "react-router-dom";
import { linkCekDonasi } from "../../../../helper/constant";
import { useDispatch } from "react-redux";
import { setMetodePembayaran } from "../../../../store/slices/donasi";

export default function Pembayaran() {
  const ewallet = [
    {
      id: 1,
      jenis: "OVO",
      display: ovo,
    },
    {
      id: 2,
      jenis: "GoPay",
      display: gopay,
    },
    {
      id: 3,
      jenis: "ShopeePay",
      display: shopee,
    },
    {
      id: 4,
      jenis: "LinkAja",
      display: linkaja,
    },
    {
      id: 5,
      jenis: "Dana",
      display: dana,
    },
    {
      id: 6,
      jenis: "Alfamart",
      display: alfamart,
    },
    {
      id: 7,
      jenis: "QRIS",
      display: qris,
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = (item) => {
    dispatch(setMetodePembayaran(item.jenis));
    navigate(linkCekDonasi);
  };

  return (
    <Layout>
      <div className="container d-flex flex-column align-items-center justify-content-center py-5">
        {ewallet.map((item) => (
          <div
            key={item.id}
            className="card mt-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleOnClick(item)}
          >
            <img
              src={item.display}
              style={{ width: "70px", height: "70px", marginLeft: "20px" }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
