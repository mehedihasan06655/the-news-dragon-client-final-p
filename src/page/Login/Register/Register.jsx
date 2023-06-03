import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url)

        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            console.log(createUser)
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    const handleAccept = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <Container>
            <h3 className="text-center">Please Register</h3>
            <Form onSubmit={handleRegister} className="mx-auto w-25">
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="url" placeholder="Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccept}
                    type="checkbox" 
                    name='accept' 
                    label={<> Accept <Link to='/terms'>Terms & Conditions </Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Your have an account <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    <p> </p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p> </p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;