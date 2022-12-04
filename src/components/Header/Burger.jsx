import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#223137" : "#223137")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.25s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({isOpen, setIsOpen}) => {


  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Burger;
