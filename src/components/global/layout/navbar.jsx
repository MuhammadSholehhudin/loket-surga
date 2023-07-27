import { Link } from "react-router-dom";
import {
  linkArtikel,
  linkBeranda,
  linkDonasi,
  linkTentang,
} from "../../../helper/constant";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to={linkBeranda}>
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={linkTentang}>
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={linkArtikel}>
                  Artikel
                </Link>
              </li>
            </ul>

            <Link
              to={linkDonasi}
              className="nav-link"
              style={{ marginLeft: "20px" }}
            >
              <button className="btn" style={{ backgroundColor: "#F8FDCF" }}>
                Donasi
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Loket Surga
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={linkBeranda}>
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkTentang}>
                Tentang
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={linkArtikel}>
                Artikel
              </Link>
            </li>
            <Link to={linkDonasi} className="nav-link">
              <button className="btn btn-info text-white">Donasi</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
