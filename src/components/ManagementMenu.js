import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ManagementMenu = () => {
  const managementMenuStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="box has-text-centered" style={managementMenuStyle}>
          <h1 className="title">Management Menu</h1>
          <div className="buttons is-centered">
            <Link to="/users" className="button is-primary">
              User
            </Link>
            <Link to="/suppliers" className="button is-info">
              Supplier
            </Link>
          </div>
          <button className="button is-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementMenu;
