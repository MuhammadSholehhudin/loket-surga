import Footer from "./footer";
import Navbar from "./navbar";
// import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <section className="mt-5">{children}</section>
      <Footer />
    </div>
  );
}
