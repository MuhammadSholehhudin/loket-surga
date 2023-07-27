import Footer from "./footer";
import Navbar from "./navbar";
// import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
