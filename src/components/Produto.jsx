import React from "react";
import { Card, Col, Container, Form, Navbar, Row } from "react-bootstrap";


export const Produto = (props) => {
  return (
    <>
      <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <h1>Título Do produto</h1>

          <Card border="dark" style={{ width: "75%", height: "10rem", marginLeft:"75px"}}>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col style={{marginTop:"75px", textAlign: "left"}}>
          <p>Preço</p>
          <p>Informações/Descrição</p>
          <p>Peso</p>
        </Col>
      </Row>
      </Container>
    </>
  );
};
