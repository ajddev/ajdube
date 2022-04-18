import { Outlet } from "react-router-dom";
import "./index.scss";
import NavigationBar from "../NavigationBar";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Footer from "../Footer";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="wrapper">
            <NavigationBar />
            <div className="page">
              <span className="tags top-tags">
                &lt;html&gt;
                <br />
                <span className="top-tag-body">&lt;body&gt;</span>
              </span>

              <Outlet />

              <span className="tags bottom-tags">
                <span className="bottom-tag-body">&lt;/body&gt;</span>
                <br />
                &lt;/html&gt;
              </span>
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
