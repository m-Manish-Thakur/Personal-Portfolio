import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2>
            <span style={{ color: "rgb(106, 130, 230)" }}>Man</span>ish
            <span style={{ color: "rgb(106, 130, 230)" }}>.</span>
          </h2>
        </NavLink>
        <img
          src="Images/burger-menu.png"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        />
      </header>

      <div
        class="offcanvas offcanvas-start"
        style={{ width: "300px" }}
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            style={{ right: "20px", position: "absolute", top: "20px" }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body" id="menu_box">
          <div className="item1">
            <img
              src="https://media.licdn.com/dms/image/D5603AQEati8qnaqRIQ/profile-displayphoto-shrink_400_400/0/1700218604767?e=1709164800&v=beta&t=IamStK4TstWdoc855K1fUvtlpdv1kp2UQye8Max-0iY"
              width="95px"
              height="95px"
              style={{
                border: "3px solid rgb(30, 126, 185)",
                borderRadius: "50%",
              }}
              alt="Me"
            />
            <h3>Manish Thakur</h3>
          </div>
          <div className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Home
                </span>
              </a>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  About
                </span>
              </a>
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Services
                </span>
              </a>
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Portfolio
                </span>
              </a>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active_Link" : "diactive_link")}>
              <a href="#">
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Contact
                </span>
              </a>
            </NavLink>
          </div>

          <div className="social_link">
            <div>
              <a href="https://www.linkedin.com/in/manish-thakur-%F0%9F%87%AE%F0%9F%87%B3-9a6877235/" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/m-Manish-Thakur" target="_blank">
                <i class="fa-brands fa-github" target="_blank"></i>
              </a>
              <a href="mailto: manishthakur231690@gmail.com" target="_blank">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div>
            <p>Copyright © 2023 Manish Thakur. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
