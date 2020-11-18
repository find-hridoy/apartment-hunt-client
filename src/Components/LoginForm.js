import React from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="card shadow border-0">
              <form className="p-5">
                <h5 className="text-dark mb-4">Login</h5>
                <div className="form-group">
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
                <div className="d-flex justify-content-between mb-3">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <NavLink to="/forget" className="text-primary">
                    Forgot Password
                  </NavLink>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  Submit
                </button>
                <p className="text-center text-black">
                  Don't have an account?{" "}
                  <NavLink to="/createAccount" className="text-primary">
                    Create an account
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

export default LoginForm;
