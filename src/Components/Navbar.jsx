import React, { useState } from "react";
import styled from "styled-components";
import { BsCart3, BsTextRight, BsXLg } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

const Navbar = () => {
  const { total_item } = useCartContext();
  const [menuIcon, setMenuIcon] = useState();
  const [menu, setMenu] = useState("home");


  const StyledNav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      margin-right: 4.8rem;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }

        hr {
          border: none;
          width: 80%;
          height: 3px;
          border-radius: 10px;
          background: #20cf37;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        margin-right: 20px;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <StyledNav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home {menu === "home" ? <hr /> : <></>}
            </NavLink>
          </li>
          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About {menu === "about" ? <hr /> : <></>}
            </NavLink>
          </li>
          <li
            onClick={() => {
              setMenu("products");
            }}
          >
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products {menu === "products" ? <hr /> : <></>}
            </NavLink>
          </li>
          <li
            onClick={() => {
              setMenu("contact");
            }}
          >
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact {menu === "contact" ? <hr /> : <></>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <BsCart3 className="cart-trolley" size={25} />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* navbar toggle button for mobile view */}
        <div className="mobile-navbar-btn">
          <BsTextRight
            size={30}
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <BsXLg
            size={30}
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
