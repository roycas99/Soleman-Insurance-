import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = (props: { year: string | number | boolean ; }) => {
  return (
    <>
      <footer
        style={{
          width: "100%",
          position: "relative",
          bottom: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-5"> <small>Copyright &copy; Soleiman Insurance Agency LLC {props.year}</small></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
