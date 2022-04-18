import React from "react";
import { Container, Navbar, } from "react-bootstrap";

export const Cabecalho = (props) => {
  return (
    <>
      <Navbar bg="dark">
        <Container fluid="sm">
          <Navbar.Brand href="/">
            <img
              src="/logo192.png"
              style={{marginLeft:8}}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
