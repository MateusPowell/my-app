import { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { useProdutoContext } from "../contexts/Produto";

export const Cadastro = (props) => {
  const { adicionar } = useProdutoContext();
  const [preco, setPreco] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [peso, setPeso] = useState("");

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="cadastroProduto">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  onChange={(ev) => {
                    setTitulo(ev.target.value);
                  }}
                  type="text"
                  placeholder="Insira o Título do Produto"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cadastroProduto">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  onChange={(ev) => {
                    setPreco(ev.target.value);
                  }}
                  type="number"
                  placeholder="Insira o Preço"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cadastroProduto">
                <Form.Label>Informações/Descrição</Form.Label>
                <Form.Control
                  onChange={(ev) => {
                    setDescricao(ev.target.value);
                  }}
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Insira as Informações/Descrição"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="cadastroProduto">
                <Form.Label>Peso</Form.Label>
                <Form.Control
                  onChange={(ev) => {
                    setPeso(ev.target.value);
                  }}
                  type="number"
                  placeholder="Insira o Peso"
                />
              </Form.Group>
            </Col>
            <Col>
              <Card border="dark" style={{ width: "30rem", height: "20rem" }}>
                <Card.Body>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Insira a Imagem do Produto:</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col style={{ textAlign: "center" }}>
              <Button
                style={{ margin: "5px", padding: "10px" }}
                size="sm"
                variant="primary"
                type="Reset"
                onClick={() =>
                  adicionar({
                    titulo,
                    preco,
                    descricao,
                    peso,
                  })
                }
              >
                Salvar
              </Button>

              <Button
                style={{ margin: "5px", padding: "10px" }}
                size="sm"
                variant="primary"
                type="Button"
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

