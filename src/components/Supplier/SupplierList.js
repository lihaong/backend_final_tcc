import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = async () => {
    try {
      const response = await axios.get("https://final-tcc-users-ze34kd7dlq-uc.a.run.app/suppliers");
      setSuppliers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBack = () => {
    navigate("/menu");
  };
  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`https://final-tcc-users-ze34kd7dlq-uc.a.run.app/suppliers/${id}`);
                  toast.success("User deleted successfully");

      getSuppliers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 className="title">Supplier List</h1>
          <button
              className="button is-warning mr-2"
              onClick={handleBack}
            >
              Back to menu
            </button>
          <Link to="/suppliers/add" className="button is-success">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={supplier.id}>
                  <td>{index + 1}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.address}</td>
                  <td>
                    <Link
                      to={`/suppliers/edit/${supplier.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSupplier(supplier.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierList;
