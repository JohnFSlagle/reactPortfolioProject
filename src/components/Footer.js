import { Container, Row, Col } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const isSearchResultsPage = location.pathname === '/search-results';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer bg-dark text-white py-5">
      <Container>
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-4">
            <h5 className="footer-heading">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link text-white">Home</Link>
              </li>
              {!isSearchResultsPage && (
                <li className="mb-2">
                  <button className="btn btn-link text-white" onClick={scrollToTop}>
                    <FaArrowUp className="mr-1" /> Back to Top
                  </button>
                </li>
              )}
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5 className="footer-heading">Social</h5>
            <a className="btn btn-link text-white" href="http://www.facebook.com/">
              <FaFacebook className="mr-1" /> Facebook
            </a>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5 className="footer-heading">Contact</h5>
            <a role="button" className="btn btn-link text-white" href="tel:+9728359634">
              <FaPhone className="mr-1" /> (972) 835-9634
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-white"
              href="mailto:johnfslagle@gmail.com"
            >
              <FaEnvelope className="mr-1" /> johnfslagle@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
