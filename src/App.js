import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import SupplierList from "./components/Supplier/SupplierList";
import AddSupplier from "./components/Supplier/AddSupplier";
import EditSupplier from "./components/Supplier/EditSupplier";
import Menu from "./components/ManagementMenu";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/suppliers" element={<SupplierList />} />
        <Route path="/suppliers/add" element={<AddSupplier />} />
        <Route path="/suppliers/edit/:id" element={<EditSupplier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
