import React from "react";
import { NavLink } from "react-router-dom";

const CreateAccountForm = () => {
  return (
    <>
      <div className="py-5 mt-3">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="card shadow border-0" style={{ width: "450px" }}>
              <form className="p-5">
                <h5 className="text-dark mb-4">Create an account</h5>
                <div className="form-group">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Username or Email"
                    className="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Submit
                </button>
                <p className="text-center text-black">
                  Don't have an account?{" "}
                  <NavLink to="/login" className="text-primary">
                    Login
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountForm;
