import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import logo from "../../logo.png";
import "../../App.css";
import "./Navbar.css";
import { titleStyle, itemStyle } from "./sidebar-style";

export const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const routeData = [
    {
      path: "/",
      componentName: "Home",
    },
    {
      path: "/products",
      componentName: "Products",
    },
    {
      path: "/about-us",
      componentName: "About Us",
    },

    {
      path: "/wishlist",

      componentName: showSideNav ? (
        "Wishlist"
      ) : (
        <i class="far fa-bookmark icon-link-3pt"></i>
      ),
    },
    {
      path: "/cart",

      componentName: showSideNav ? (
        "Cart"
      ) : (
        <i class="fas fa-shopping-cart icon-link-3pt"></i>
      ),
    },
    {
      path: "/login",
      componentName: showSideNav ? (
        <button className="login-btn">Login</button>
      ) : (
        <i class="fas fa-user icon-link-3pt"></i>
      ),
    },
  ];
  return (
    <>
      <header class="header-3pt">
        <div class="header-logo-3pt">
          <img src={logo} alt="" class="header-img-3pt" />
        </div>

        <div class="header-nav-3pt">
          <nav>
            <ul class="header-menu-3pt">
              {routeData.map((link) => {
                return (
                  <Link to={link.path}>
                    <li class="menu-item-3pt">{link.componentName}</li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>

        <input type="search" class="mbr-vw search" placeholder="Search.." />
        <i
          class="fas fa-bars hamburger-3pt"
          onClick={() => setShowSideNav(true)}
        ></i>

        <SideNav
          showNav={showSideNav}
          onHideNav={() => setShowSideNav(false)}
          title="MangaNotComics"
          items={routeData.map((link) => {
            return (
              <Link to={link.path} onClick={() => setShowSideNav(false)}>
                {link.componentName}
              </Link>
            );
          })}
          titleStyle={titleStyle}
          itemStyle={itemStyle}
        />

        <div class="header-icons-3pt">
          <input type="search" class="search" placeholder="Search.." />
        </div>
      </header>
      
    </>
  );
};
