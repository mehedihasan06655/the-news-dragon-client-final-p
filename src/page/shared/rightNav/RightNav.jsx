import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../qZone/QZone";
import bg from "../../../assets/bg.png"

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div className="mt-4">
                <h4>Find Us On</h4>
                <ListGroup className="pb-4">
                    <ListGroup.Item><FaFacebookF/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div className="position-relative mt-4">
                <img src={bg} alt="" />
                <div className="position-absolute text-white top-0 text-center pt-6 p-4">
                    <h5 className="fw-bold fs-3">Create an Amazing Newspaper</h5>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;