import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../../context/UserContext';
import './login.css';
//import { AuthContext } from '../../context/AuthContext';
//import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

export function Login({ }) {

  //const { setLogin } = useContext(UserContext);

  // const {login} = useContext(AuthContext);
  // console.log(login);

  // const navigate = useNavigate();

  // const onLogin = () => {

  //   login();

  //   navigate("/", {
  //     replace: true,
  //   });
  // }

  const {user, setUser} = useContext(UserContext)

  const saveData = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    // console.log('ok');

    let userr ={
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    console.log(userr);
    setUser(userr);
  }


  return (
    <>
      <h1 className='title'>Log in into your account</h1>
      <main className='container_login'>
        <Form className='form' onSubmit={saveData}>
          <h3>Sign in</h3>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter your name" />
          </Form.Group>
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
              Sign in {/* onClick={} */}
            </Button>
          </div>
        </Form>

        <Form className='form'>
          <h3>Are you new? Create your account</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>User Name</Form.Label>
              <Form.Control name="user" type="text" placeholder="User Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
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