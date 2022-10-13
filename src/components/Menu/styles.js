import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const moveToRight = keyframes`
0% {
 
  opacity: 0;
}
50%{
  opacity: 0;

}
100%{
  transition: opacity 3s linear 3s;
  opacity: 1;
}
  `;

export const Conainter = styled.div`
  text-decoration: none;
  top: 0;
  display: flex;
  background: #babfc7;
  z-index: 3;
  position: absolute;

  .main {
    width: 100%;
    padding: 1rem;
    z-index: 3;
  }

  .slider {
    background: #fff;
    color: #ccc;
    height: 100vh;
    width: 15rem;
    transition: all 0.5s;
    z-index: 3;
  }

  .top_section {
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 1.4rem 1rem;
    border-bottom: 1px #ccc solid;
    h1 {
      font-size: 1rem;
    }
  }

  .bars {
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    margin-left: 9.3rem;
    padding-top: 1.6rem;
  }
  .link {
    display: flex;
    color: #babfc7;
    line-height: 1.15rem;
    font-weight: 500;
    padding: 0.6rem 0.4rem;
    gap: 0.6rem;
  }

  .active {
    color: #babfc7;
    font-weight: bold;
  }
  .icon,
  .link_text {
    font-size: 1rem;

    margin-left: 0.6rem;
  }
  .icon {
    &:hover {
      color: #d7d7d7;
      cursor: pointer;
      color: #000;
      border-radius: 0.2rem;
    }
  }
`;
export const Submenu = styled.div`
  margin-top: 1rem;
`;

export const Icon = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;

  justify-content: first baseline;
  align-items: flex-start;

  margin-left: 0.5rem;
  &:hover {
    color: #d7d7d7;
    cursor: pointer;
    color: #000;
    border-radius: 0.2rem;
  }
`;
export const Name = styled.div`
  font-size: 1rem;
  animation: ${moveToRight} 0.6s;
  font-size: 1.1rem;
  font-family: "Montserrat", Helvetica, Arial, serif;
  font-weight: 500;
  margin-left: 0.3rem;

  &:hover {
    color: #d7d7d7;
    cursor: pointer;
    color: #000;
    border-radius: 0.2rem;
  }
`;
export const DropdownLink = styled(Link)`
  font-size: 1rem;

  animation: ${moveToRight} 0.6s;
  font-size: 1.1rem;
  font-family: "Montserrat", Helvetica, Arial, serif;
  font-weight: 500;
  margin-left: -1.5rem;
  text-decoration: none;

  display: flex;

  color: #babfc7;
  line-height: 1.15rem;
  font-weight: 500;
  padding: 1rem 0.9rem;
  gap: 1rem;

  &:hover {
    background: #d7d7d7;
    cursor: pointer;
    color: #000;
    border-radius: 0.2rem;
  }
`;
