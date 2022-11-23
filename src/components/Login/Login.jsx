import { useContext, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../../context/UserContext';
import './login.css';
//import { AuthContext } from '../../context/AuthContext';
//import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

export function Login({ dataUser}) {
  

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

  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem('users'));
    setUser(interin)
  }, [])
  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(user));
  }, [user])

  const loginUser = (e) => {
    e.preventDefault();
    // recoger info del formilario
    //comprobar que los datos sean correctos
    //añadir el usuario al sessiostrage

    let usuario ={
      email: e.target.email.value,
      password: e.target.password.value
    };

    const interim = dataUser.find(user => (usuario.email === user.email) &&  (usuario.password === user.password))
    if (interim) {
      console.log(interim)
      setUser(interim)
    }else {
      alert('no esta bien')
    }
  }

  const registerUser = (e) => {
    e.preventDefault();
  //recoger info del formulario
  //fetch post
  //
  }


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
              Sign in {/* onClick={} */}
            </Button>
          </div>
        </Form>

        <Form className='form' onSubmit={(e) => registerUser(e)}>
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