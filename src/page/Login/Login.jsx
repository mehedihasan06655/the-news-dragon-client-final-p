import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    console.log(from)

    const handleSignIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
            <Container>
                <h3 className="text-center">Please Login</h3>
                <Form onSubmit={handleSignIn} className="mx-auto w-25">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                       Don't have an accout <Link to='/register'>Register</Link>
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

export default Login;