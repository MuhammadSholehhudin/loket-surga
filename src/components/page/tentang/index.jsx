import { useEffect, useState } from "react";
import { fetchAPI } from "../../../helper/hooks";
import Layout from "../../global/layout";

export default function Tentang() {
  const [about, setAbout] = useState([]);

  async function fetchAbout() {
    try {
      const { data } = await fetchAPI("/abouts?populate=*");
      console.log(data);
      setAbout(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <Layout>
      <div
        className="d-flex flex-column align-items-center"
        style={{
          minHeight: "100vh",
          marginTop: "100px",
        }}
      >
        <h1> Tentang Kami </h1>
        <p>Platform Berbagi yang insyaAllah Amanah</p>
        {about && about !== null ? (
          about.map((item, i) => (
            <div key={i} className="container mb-5">
              <img
                className="img-fluid mt-5"
                src={`http://192.168.15.62:1337${item.attributes.thumbnail.data.attributes.url}`}
                style={{
                  borderRadius: "20px",
                  width: "100%",
                }}
              />
              <h3 className="mt-5">{item.attributes.title}</h3>
              <p className="mt-5">
                {item.attributes.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </Layout>
  );
}
