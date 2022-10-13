import { BiComment } from "react-icons/bi";
import {
  FiChevronDown,
  FiChevronsDown,
  FiMessageSquare,
  FiImage,
  FiFolder,
} from "react-icons/fi";

import { TbUsers, TbDoorExit } from "react-icons/tb";
import { IoBarChartOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Conainter, Submenu, Icon, Name, DropdownLink } from "./styles";

export const Sliderbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const menuItem = [
    {
      path: "/",
      name: "Dasboard",
      icon: <IoBarChartOutline />,
    },
    {
      path: "#",
      name: "Enviar mensagem",
      icon: <IoPaperPlaneOutline />,
      iconClosed: <FiChevronDown style={{ marginBottom: "-0.3rem" }} />,
      iconOpened: (
        <FiChevronsDown
          style={{
            color: "#30343c",
            marginBottom: "-0.3rem",
          }}
        />
      ),

      subNav: [
        {
          name: "Enviar texto",
          path: "/text",
          icon: <FiMessageSquare style={{ color: "#6495ed" }} />,
        },
        {
          name: "Enviar imagem",
          path: "/text",
          icon: <FiImage style={{ color: "#6495ed" }} />,
        },
        {
          name: "Enviar arquivo",
          path: "/Double",
          icon: <FiFolder style={{ color: "#6495ed" }} />,
        },
      ],
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
            <Icon
              className="icon"
              style={{
                fontWeigt: "900",
                color: "#7b7d7d",
                fontSize: isOpen ? "1rem" : "1.5rem",
                marginTop: isOpen ? "" : "0.8rem",
                marginLeft: isOpen ? "" : "5px",
              }}
            >
              {item.icon}
            </Icon>
            <Name
              style={{
                opacity: "1",
                display: isOpen ? "block" : "none",
              }}
              onClick={item.subNav && showSubnav}
            >
              {item.name}
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
              <Submenu>
                {subnav &&
                  item.subNav?.map((item, subindex) => (
                    <DropdownLink to={item.path} key={subindex}>
                      {item.icon}
                      {item.name}
                    </DropdownLink>
                  ))}
              </Submenu>
            </Name>
          </NavLink>
        ))}
      </div>
    </Conainter>
  );
};
