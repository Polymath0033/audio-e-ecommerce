import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== ("/" || "") ? <Header /> : ""}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
