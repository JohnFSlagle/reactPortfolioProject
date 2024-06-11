import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <h5>Social</h5>

            <a className="btn btn-link" href="http://www.facebook.com/">
              <p>Facebook</p>
            </a>
          </Col>
          <Col sm="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+9728359634">
              <i className="fa fa-phone" /> (972) 835-9634
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="www.johnfslagle@gmail.com"
            >
              <i className="fa fa-envelope-o" /> Johnfslagle@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
