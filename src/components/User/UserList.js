import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://final-tcc-users-ze34kd7dlq-uc.a.run.app/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
  navigate("/menu");
};

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://final-tcc-users-ze34kd7dlq-uc.a.run.app/users/${id}`);
            toast.success("User deleted successfully");

      getUsers();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 className="title">User List</h1>
          <button
    className="button is-warning mr-2"
    onClick={handleBack}
  >
    Back to menu
  </button>
          <Link to="/users/add" className="button is-success">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
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

export default UserList;
