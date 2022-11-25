//import { useContext} from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
//import { UserContext } from '../../context/UserContext';
import './login.css';
//import { useNavigate } from 'react-router-dom';


export function Login({ dataUser, loginUser, registerUser }) {
  
  //const { user, setUser } = useContext(UserContext)
  
  return (
    <>
      <h1 className='title'>Log in into your account</h1>
      <main className='container_login'>
        <Form className='form' onSubmit={(e) => loginUser(e)}>
          <h3>Sign in</h3>
          <Form.Group className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" value="send">
              Sign in
            </Button>
          </div>
        </Form>

        <Form className='form' onSubmit={(e) => registerUser(e)}>
          <h3>Are you new? Create your account</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="First name" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" type="number" placeholder="Phone number" required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Email Address" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>

      </main>
    </>
  );
}