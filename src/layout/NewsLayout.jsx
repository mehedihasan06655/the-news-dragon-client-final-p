import { Col, Container, Row } from "react-bootstrap";
import Header from "../page/shared/Header/Header";
import RightNav from "../page/shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
        <Header />
        <Container>
            <Row>
                <Col lg={9}>
                    <Outlet/>
                </Col>
                <Col lg={3}>
                    <RightNav />
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default NewsLayout;