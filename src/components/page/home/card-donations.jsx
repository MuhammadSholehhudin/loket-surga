import { formatNumber } from "../../../helper/utils";
import fotoProfile from "../../../assets/img/default.png";

export default function CardDonations({ data }) {
  return (
    <div className="container align-items-center d-flex flex-column gap-4">
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f6f6f6",
            width: "100%",
            maxWidth: "620px",
            borderRadius: 8,
            boxShadow: "1px 2px 3px rgba(0,0,0,.3)",
            gap: "16px",
          }}
          className="p-4"
        >
          <img
            src={fotoProfile}
            style={{ width: 90, height: 90, borderRadius: "50%" }}
          />
          <div>
            <h5>{item.attributes.username}</h5>
            <p>
              Telah Berdonasi Sebesar :{" "}
              <span style={{ fontWeight: "bold" }}>
                Rp. {formatNumber(item.attributes.donation)}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
