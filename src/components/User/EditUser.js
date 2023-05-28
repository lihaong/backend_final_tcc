import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select one");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    
    if (name === "" || email === "" || gender === "Select one") {
      toast.error("Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    try {
      await axios.patch(`https://berhasil---final-tcc-users-ze34kd7dlq-uc.a.run.app/users/${id}`, {
        name,
        email,
        gender,
      });
      toast.success("User updated successfully");
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const response = await axios.get(`https://berhasil---final-tcc-users-ze34kd7dlq-uc.a.run.app/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate("/users");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 className="title">Edit User</h1>
          <form onSubmit={updateUser}>
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
              <label className="label">Gender</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option disabled value="Select one">
                      Select one
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  </div>
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

export default EditUser;