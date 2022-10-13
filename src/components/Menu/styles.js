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
    padding: 1.3rem;
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
    padding: 0.9rem 0.4rem;
    gap: 1rem;
  }
  .link:hover {
    color: #fff;
    animation: ${moveToRight} 0s;
  }
  .active {
    color: #babfc7;
    font-weight: bold;
  }
  .icon,
  .link_text {
    font-size: 1rem;

    margin-left: 0.3rem;
  }
  .link_text {
    animation: ${moveToRight} 0.6s;
    font-size: 1.1rem;
    font-family: "Montserrat", Helvetica, Arial, serif;
    font-weight: 500;
  }
  .icon {
    display: flex;
    font-size: 1.1rem;
    font-weight: bold;

    justify-content: first baseline;
    align-items: flex-start;

    margin-left: 0.5rem;
  }
`;
