import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>

      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      {/* LOGIN */}
      <div className="form-box Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>Login</h2>

        <form>
          <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input type="password" required />
            <label>Password</label>
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
            <button className="btn">Login</button>
          </div>

          <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="SignUpLink"
                onClick={(e) => {
                  e.preventDefault();
              setIsActive(true);
                }}
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* INFO LOGIN */}
      <div className="info-content Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>
          Welcome to Edu-Analytics!
        </h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          Monitor student performance with data-driven insights.
        </p>
      </div>

      {/* REGISTER */}
      <div className="form-box Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>Register</h2>

        <form>
          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input type="email" required />
            <label>Email</label>
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input type="password" required />
            <label>Password</label>
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box animation" style={{ "--li": 20, "--S": 3 }}>
            <button className="btn">Register</button>
          </div>

          <div className="regi-link animation" style={{ "--li": 21, "--S": 4 }}>
            <p>
              Already have an account?{" "}
              <a
                href="#"
                className="SignInLink"
                onClick={(e) => {
                  e.preventDefault();
                  setIsActive(false);
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* INFO REGISTER */}
      <div className="info-content Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
          Welcome!
        </h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          Create your account to get started.
        </p>
      </div>
    </div>
  );
}
