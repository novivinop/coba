import { Button, Container, Col, Row } from "react-bootstrap";
import "../../style.css";

const Sewa = () => {
    return (
        <>
        <section className="nav-background">
            <Container>
                <Row className="section-mb">
                    <Col className="mt-5 mx-auto" xs={12} md={12} lg={6} >
                        <h2 className="fw-bold lh-base w-75">Layanan Internet terbaik di kawasan Bekasi</h2>
                        <p className="w-75 mt-3">Selamat datang di Nusa Berkah Net. Kami menyediakan layanan internet kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu dalam berinternet.</p>
                    </Col>
                    <Col className="mx-auto" xs={12} md={12} lg={6}>
                        <img src="/images/Home/img_car.png" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
  };
  
export default Sewa;