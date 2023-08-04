import Layout from "../../global/layout";
import { useSelector } from "react-redux";
import sedekahJumat from "../../../assets/img/thumbnail/sedekahJumat.jpg";

export default function Artikel() {
  const selectedArticle = useSelector((state) => state.article.selectedArticle);

  return (
    <Layout>
      <div
        className="d-flex flex-column align-items-center"
        style={{
          minHeight: "100vh",
          marginTop: "100px",
        }}
      >
        <h1> Update Artikel </h1>
        <p>Pantau penyaluran Bantuan Anda</p>
        {selectedArticle && selectedArticle.attributes !== null ? (
          <div key={selectedArticle.attributes.id} className="container mb-5">
            <img
              className="img-fluid mt-5"
              src={`http://192.168.15.62:1337${selectedArticle.attributes.pic.data.attributes.url}`}
              style={{
                borderRadius: "20px",
                width: "100%",
              }}
            />
            <h3 className="mt-5">{selectedArticle.attributes.title}</h3>
            <div className="mt-5">
              {selectedArticle.attributes.article_content
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          </div>
        ) : (
          <div className="container mb-5">
            <img
              className="img-fluid mt-5"
              src={sedekahJumat}
              style={{
                borderRadius: "20px",
                width: "100%",
              }}
            />
            <h3 className="mt-5">Dahsyatnya Sedekah Jumat</h3>
            <div className="mt-5">
              <p>
                &quot;Dan sedekah pada hari itu (Jumat) lebih mulia dibanding
                hari-hari selainnyaÂ.&quot; (HR Ibnu Khuzaimah). <br />
                <br />
                Mari raih keberkahan dengan bersedekah. “Dan tidak ada matahari
                yang terbit dan terbenam pada suatu hari yang lebih utama
                dibanding hari Jumat. Bersedekah pada hari Jumat lebih besar
                pahalanya daripada semua hari lainnya.” (HR. Abdurrazaq dalam
                Al-Mushannaf) <br />
                <br />
                Hari Jumat disebut sebagai sayyidul ayyam atau pemimpin
                hari-hari lainnya. Pada hari tersebut, Allah membuka pintu
                ampunan, doa yang terkabul dan amal baik yang berpahala besar.
                Mari bersedekah. Sedekah ini akan mendukung operasional BAZNAS
                dalam menunjang berbagai program pengentasan kemiskinan di
                Indonesia.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
