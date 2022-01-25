import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Online education for kiddies</h5>
      <h1>Learn</h1>
      <h1>Anything</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere</h1>
      <BtnContainer>
        <button className="readMore">Read More</button>
        <button>7 Day Free Trial</button>
      </BtnContainer>
    </Container>
  );
};

export default HeroText;

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1rem;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readMore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;

    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;
