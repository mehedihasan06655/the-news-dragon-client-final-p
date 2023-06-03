import { Col, Container, Row } from "react-bootstrap";
import Header from "../page/shared/Header/Header";
import LeftNav from "../page/shared/leftNav/LeftNav";
import RightNav from "../page/shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../page/shared/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
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

export default Main;