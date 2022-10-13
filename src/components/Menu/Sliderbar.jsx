import { BiComment } from "react-icons/bi";
import { TbUsers, TbDoorExit } from "react-icons/tb";
import { IoBarChartOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Conainter } from "./styles";

export const Sliderbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dasboard",
      icon: <IoBarChartOutline />,
    },
    {
      path: "/text",
      name: "Enviar mensagem",
      icon: <IoPaperPlaneOutline />,
    },
    {
      path: "/home",
      name: "Múltiplos disparos",
      icon: <BiComment />,
    },
    {
      path: "/home",
      name: "Lista de contatos",
      icon: <TbUsers />,
    },
    {
      path: "/home",
      name: "sair",
      icon: <TbDoorExit />,
    },
  ];

  return (
    <Conainter style={{ zIndex: "5" }}>
      <div style={{ width: isOpen ? "15rem" : "3rem" }} className="slider">
        <div className="top_section">
          <img
            src="fastapi.svg"
            style={{
              display: isOpen ? "block" : "none",
              paddingLeft: "1rem",
            }}
            width={20}
            alt=""
          />
          <h1
            style={{
              display: isOpen ? "block" : "none",
              width: "100px",
              paddingRigth: "30px",

              whiteSpace: "nowrap",
              marginLeft: "1rem",
              color: "#646565",
              fontFamily: "Montserrat",
              fontWeigt: "900",
            }}
          >
            CHAT-API
          </h1>
          <div
            style={{
              marginLeft: isOpen ? "7.3rem" : "-0.3rem",
              marginTop: "-1.7rem",
            }}
            className="bars"
          >
            <FaBars
              style={{
                marginLeft: isOpen ? "-4.6rem" : "0.3rem",
              }}
              onClick={toggle}
            />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClasseName="active"
          >
            <div
              className="icon"
              style={{ fontWeigt: "900", color: "#646565" }}
            >
              {item.icon}
            </div>
            <div
              className="link_text"
              style={{
                opacity: "1",
                display: isOpen ? "block" : "none",
                transition: "3s",
              }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </Conainter>
  );
};
