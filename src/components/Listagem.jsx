import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Listagem = () => {
  return (
    <>
      <Row xs={1} md={5} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col>
            <Card>
              <Link class="text-decoration-none text-dark" style={{textAlign:"Right", paddingRight:"10px"}} to="/">Excluir</Link>
              <Card.Img variant="top" src="logo192.png" />
              <Link class="text-decoration-none text-dark" style={{textAlign:"Left", paddingLeft:"10px"}}to="/cadastro">Editar</Link>
            </Card>
            <h4>Titulo</h4>
          </Col>
        ))}
      </Row>
    </>
  );
};
