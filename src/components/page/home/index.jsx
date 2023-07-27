import { useEffect, useState } from "react";
import { fetchAPI } from "../../../helper/hooks";
import Layout from "../../global/layout";
import CardDonations from "./card-donations";
import Carousel from "./carousel";

export default function Home() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchDonations() {
    try {
      const { data } = await fetchAPI("/donations");
      setDonations(data);
      setLoading(false);
    } catch (error) {
      setError("Gagal mengambil data");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <Layout>
      <div className="container m-auto">
        <Carousel />
      </div>

      <div
        className="container-fluid mb-5"
        style={{ width: "100%", height: "50px", backgroundColor: "black" }}
      >
        Tes
      </div>

      <div style={{ height: "700px", overflow: "auto" }}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : donations.length > 0 ? (
          <CardDonations data={donations} />
        ) : (
          <p>Tidak ada data</p>
        )}
      </div>
    </Layout>
  );
}
