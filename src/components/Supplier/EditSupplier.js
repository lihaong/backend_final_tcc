import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditSupplier = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState(""); // Change: Add 'address' state variable
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSupplierById();
  }, [id]);

  const updateSupplier = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || address === "") {
      toast.error("Please fill in all fields");
      return;
    };

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

      try {
        await axios.patch(`https://final-tcc-users-ze34kd7dlq-uc.a.run.app/suppliers/${id}`, {
          name,
          email,
          address, 
        });
        toast.success("Supplier updated successfully");
        navigate("/suppliers");
      } catch (error) {
        console.log(error);
      }
  };

  const getSupplierById = async () => {
    try {
      const response = await axios.get(`https://final-tcc-users-ze34kd7dlq-uc.a.run.app/suppliers/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setAddress(response.data.address); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate("/suppliers");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 className="title">Edit Supplier</h1>
          <form onSubmit={updateSupplier}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label> {/* Change: Replace 'Gender' with 'Address' */}
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={address} // Change: Use 'address' state variable
                  onChange={(e) => setAddress(e.target.value)} // Change: Use 'setAddress' to update 'address'
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-danger"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSupplier;
