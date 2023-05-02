import { useState } from "react";
import Profiles from "./pages/Profiles";
import AddProfile from "./components/profiles/AddProfile";
import AddProfileReactHookForm from "./components/profiles/AddProfileReactHookForm";
import AddProfileYupValidation from "./components/profiles/AddProfileYupValidation";
import Home from "./pages/Home";
import AddNewProfile from "./pages/AddNewProfile";
import EditProfile from "./pages/EditProfile";
import SingleProfile from "./pages/SingleProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Header from "./components/layouts/Header";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Header />
        <Container className="pt-2">
          {/* <AddProfile addProfile={addProfile} />
        <AddProfileReactHookForm addProfile={addProfile} /> */}

          <Routes>
            <Route index element={<Home />} />
            <Route path="all-profiles" element={<Profiles />} />
            <Route path="add-new" element={<AddNewProfile />} />
            <Route path="edit-profile/:id" element={<EditProfile />} />
            <Route path="single-profile/:id" element={<SingleProfile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="*"
              element={<NotFound message="Sorry! 404 Page Not Found." />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
