import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";

interface IHeadingProps {
  title?: string;
}

const Heading = ({ title = "Fiskeredskaper" }: IHeadingProps): JSX.Element => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Heading;
