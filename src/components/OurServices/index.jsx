import { Col, Container, Row } from "react-bootstrap";
import { serviceList } from "./serviceList";

const OurServices = () => {
    return (
      <Container className="section-mb" id="OurServices">
        <Row>
          <Col className="mx-auto" md={9} lg={5}>
            <img src="/images/Home/img_woman.jpg" className="img-fluid" />
          </Col>
          <Col className="mx-auto" lg={5}>
            <h4 className="fw-bold lh-base">Best Internet Service for any kind of product in Bekasi!</h4>
            <p className="mt-4">Nikmati layanan internet di Bekasi bersama Nusa Berkah Net jaminan harga lebih murah 
            dibandingkan yang lain, kualitas pelayanan terbaik untuk akses internet mudah.</p>
            <table>
              <tbody>
                {serviceList.map((service, id) => {
                  return (
                    <tr key={id} >
                      <td>
                        <img src="/images/Home/img_check.png" alt="tick" className="mt-1 me-3" />
                      </td>
                      <td>{service}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default OurServices;