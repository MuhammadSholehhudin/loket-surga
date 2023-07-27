import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/page/home";
import Tentang from "./components/page/tentang";
import Artikel from "./components/page/artikel";
import Donasi from "./components/page/donasi";
import {
  linkArtikel,
  linkBeranda,
  linkCekDonasi,
  linkDonasi,
  linkPembayaran,
  linkTentang,
} from "./helper/constant";
import { Provider } from "react-redux";
import store from "./store";
import CekDonasi from "./components/page/donasi/cek-donasi";
import Pembayaran from "./components/page/donasi/pilihan-pembayaran";

function App() {
  const router = createBrowserRouter([
    {
      path: linkBeranda,
      element: <Home />,
    },
    {
      path: linkTentang,
      element: <Tentang />,
    },
    {
      path: linkArtikel,
      element: <Artikel />,
    },
    {
      path: linkDonasi,
      element: <Donasi />,
    },
    {
      path: linkCekDonasi,
      element: <CekDonasi />,
    },
    {
      path: linkPembayaran,
      element: <Pembayaran />,
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
