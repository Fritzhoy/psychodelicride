import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './sections/Button';

const Title = styled.h1`
  font-family: "Philosopher", sans-serif;
  font-size: 46px;
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};

span {
  font-family: "Philosopher", sans-serif;-
}
.text-1{
  color: #FD349C;
}
.text-2{
  color: #FFFF00;
}
.text-3{
  color: #1ECED1; 
}
`;

const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
width: 80%;
margin: 1rem; 
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
`

const TypeWriterText = () => {
  return (
    <>
    <Title>
    If the doors of perception were cleansed every thing would appear to man
    as it is,
    <Typewriter
    options={{
      autoStart: true,
      loop: true,
    }}
      onInit={(typewriter) => {
        typewriter
          .typeString('<span class= "text-1">Infinite.</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class= "text-2">Self-Transcendence.</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class= "text-3">Chaotic!</span>')
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  </Title>
  <SubTitle> Reality is merely an illusion, although a very persistent one </SubTitle>
  <ButtonContainer>
  <Button text="Learn More" link="#about"/>
  </ButtonContainer>
  </>
  );
};

export default TypeWriterText;
