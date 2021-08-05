import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import Logo512 from "../../images/Logo512.png";

const Navbar = () => {
  const [shownID, setShownId] = useState("");
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });

    $("#navLogo").on("click", () => {
      console.log("logo click");
      $("#navbarSupportedContent ul li").removeClass("active");

      $("#homeLink").addClass("active");

      var activeWidthNewAnimHeight = $("#homeLink").innerHeight();
      var activeWidthNewAnimWidth = $("#homeLink").innerWidth();
      var itemPosNewAnimTop = $("#homeLink").position();
      var itemPosNewAnimLeft = $("#homeLink").position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });

    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");

      $(this).addClass("active");

      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  function showDropdown(id) {
    if (shownID !== "" && (id === "" || id === shownID)) {
      //reset last menu
      $("#" + shownID).animate({ height: "0px" }, 250, () => {
        $("#" + shownID).hide();
      });

      setShownId("");
    }

    if (id !== "" && id !== shownID) {
      //display the new menu
      $("#" + id).show();
      $("#" + id).animate({ height: "70px" }, 300);

      setShownId(id);
    }
  }
  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink
          to="/"
          exact
          className="navbar-brand navbar-logo"
          id="navLogo"
          onClick={() => {
            showDropdown("");
          }}
        >
          <img
            src={Logo512}
            alt="logo.png"
            width="46"
            height="46"
            style={{ borderRadius: "22px", margin: "0" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="midsection">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>

              <li className="nav-item active" id="homeLink">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  onClick={() => {
                    showDropdown("");
                  }}
                >
                  <i className="fas fa-tachometer-alt"></i>Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  exact
                  onClick={() => {
                    showDropdown("");
                  }}
                >
                  <i className="far fa-address-book"></i>About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="#"
                  exact
                  onClick={() => {
                    showDropdown("dropdown_1");
                  }}
                >
                  TEST DROPDOWN
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/service"
                  exact
                  onClick={() => {
                    showDropdown("");
                  }}
                >
                  <i className="far fa-clone"></i>Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/testimonial"
                  exact
                  onClick={() => {
                    showDropdown("");
                  }}
                >
                  <i className="far fa-chart-bar"></i>Testimonial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  exact
                  onClick={() => {
                    showDropdown("");
                  }}
                >
                  <i className="far fa-copy"></i>Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden-menu" id="dropdown_1">
            <ul className="ul-hidden">
              <li className="li-hidden">
                <NavLink className="navlink-hidden" to="/a" exact>
                  <i className="far fa-copy"></i>Aaaaa
                </NavLink>
              </li>
              <li className="li-hidden">
                <NavLink className="navlink-hidden" to="/a" exact>
                  <i className="far fa-copy"></i>Bbbbb
                </NavLink>
              </li>
              <li className="li-hidden">
                <NavLink className="navlink-hidden" to="/a" exact>
                  <i className="far fa-copy"></i>Ccccc
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
