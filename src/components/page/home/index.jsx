import { useEffect, useState } from "react";
import { fetchAPI } from "../../../helper/hooks";
import Layout from "../../global/layout";
import CardDonations from "./cardDonasi";
import CarouselHero from "./carousel";
import CardSedekah from "./CardSedekah";
import CardProgramLain from "./cardProgramLainnya";
import { Carousel } from "react-responsive-carousel";
import Artikel from "../artikel";
import CardArtikel from "./cardArtikel";

export default function Home() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [program, setProgram] = useState([]);
  const [article, setArticle] = useState([]);

  async function fetchDonations() {
    try {
      const { data } = await fetchAPI("/donations");
      setDonations(data);
      setLoading(false);
    } catch (error) {
      setError("Gagal mengambil data Donation");
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await fetchAPI("/danation-categories?populate=*");
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setError("Gagal mengambil data Category Sedekah");
      setLoading(false);
    }
  }

  async function fetchProgram() {
    try {
      const { data } = await fetchAPI("/program-lainnyas?populate=*");
      setProgram(data);
      setLoading(false);
    } catch (error) {
      setError("Gagal mengambil data Program Lainnya");
      setLoading(false);
    }
  }

  async function fetchArticle() {
    try {
      const { data } = await fetchAPI("/articles?populate=*");
      setArticle(data);
      setLoading(false);
    } catch (error) {
      setError("Gagal Mengambil data Article");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDonations();
    fetchCategories();
    fetchProgram();
    fetchArticle();
  }, []);

  return (
    <Layout>
      <section
        className="container m-auto"
        style={{ position: "relative", zIndex: "1" }}
      >
        <CarouselHero />
      </section>

      <section
        className="container text-white d-flex align-items-center justify-content-center mb-5"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "60%",
          marginTop: "-1vw",
          height: "100%",
          backgroundColor: "#4682A9",
          padding: "1vw",
          borderRadius: "10px",
          boxShadow: "1px 2px 3px rgba(0,0,0,.3)",
          zIndex: "2",
        }}
      >
        <h5 style={{ fontSize: "1.5vw" }}>BERBAGI APA UNTUK HARI INI ?</h5>
      </section>

      <div className="text-center">
        <h3> Program Sedekah</h3>
        <p>Sedekah menjadi lebih mudah, kapan saja dan dimana saja</p>
      </div>

      <section
        className="container mb-5"
        style={{
          width: "100%",
          backgroundColor: "#f6f6f6",
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : categories.length > 0 ? (
          <CardSedekah data={categories} />
        ) : (
          <p>Data Tidak di temukan !</p>
        )}
      </section>

      <section
        className="container-fluid mb-5"
        style={{ width: "100%", padding: "20px" }}
      >
        <h3 className="text-center mb-5">Program Bantuan Lainnya</h3>
        <div
          className="d-flex gap-3 justify-content-center mb-5"
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : categories.length > 0 ? (
            <CardProgramLain data={program} />
          ) : (
            <p>Data Tidak di temukan !</p>
          )}
        </div>
      </section>

      <section
        className="container-fluid mb-5"
        style={{ width: "100%", backgroundColor: "#f6f6f6", padding: "20px" }}
      >
        <div className="text-center mb-5">
          <h3>Keutamaan dari Sedekah</h3>
          <p>Baca dan pelajari keutamaan dari sedekah</p>
        </div>
        <div
          className="d-flex gap-3 justify-content-center mb-5"
          style={{
            width: "100%",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : categories.length > 0 ? (
            // <CardProgramLain data={program} />
            <CardArtikel data={article} />
          ) : (
            <p>Data Tidak di temukan !</p>
          )}
        </div>
      </section>

      <div className="text-center mb-5">
        <h3>Donasi</h3>
        <p>Terimakasih Orang-Orang Baik yang telah berdonasi.</p>
        <p>Semoga semua donasi ini telah anda niatkan karena Allah SWT.</p>
      </div>
      <section className="mt-3" style={{ height: "700px", overflow: "auto" }}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : donations.length > 0 ? (
          <CardDonations data={donations} />
        ) : (
          <p>Tidak ada data</p>
        )}
      </section>
    </Layout>
  );
}
