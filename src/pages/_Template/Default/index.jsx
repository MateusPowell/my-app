import React from "react";
import { Container } from "react-bootstrap";
import { Cabecalho } from "../../../components/Cabecalho";
import { Pesquisa } from "../../../components/Pesquisa";
import { Rodape } from "../../../components/Rodape";

export const DefaultTemplate = (props) => {
  return (
    <>
      <Cabecalho />
      <Container className="sm">
        <Pesquisa />
        <main>{props.children}</main>
      </Container>
      <Rodape />
    </>
  );
};
