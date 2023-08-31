import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";

import { Sidebar } from "./Sidebar/Sidebar";
import { AuthProvider } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div className="d-flex h-100">
      <AuthProvider>
        <Sidebar />

        <main
          className="tab-content p-5 h-100 col-10"
          style={{ minHeight: "100vh" }}
        >
          <div className="tab-pane fade show active">
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
