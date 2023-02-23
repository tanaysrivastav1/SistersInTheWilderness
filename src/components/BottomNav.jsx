import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiConversation } from "react-icons/bi";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("favorites");
    } else if (location.pathname === "/connect") {
      setActive("closet");
    } else if (location.pathname === "/") {
      setActive("home");
    }
  }, [location]);

  return (
    <div className="bottom-container">
      <div
        className={
          active === "favorites"
            ? "favorites-btn-container active-container"
            : "favorites-btn-container"
        }
        onClick={() => navigate("/about")}
      >
        {active === "about" ? (
          <AiFillHeart size={28} />
        ) : (
          <AiOutlineHeart size={28} />
        )}
        <p>About</p>
      </div>
      <div
        className={
          active === "home"
            ? "home-btn-container active-container"
            : "home-btn-container"
        }
        onClick={() => navigate("/")}
      >
        {active === "home" ? <HiHome size={28} /> : <HiOutlineHome size={28} />}
        <p>Home</p>
      </div>
      <div
        className={
          active === "closet"
            ? "closet-btn-container active-container"
            : "closet-btn-container"
        }
        onClick={() => navigate("/connect")}
      >
        <BiConversation size={28} />
        <p>Connect</p>
      </div>
    </div>
  );
};

export default BottomNav;
