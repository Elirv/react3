import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { UserContext } from '../../context/UserContext';
import './checkout.css'

export function Checkout( userPutAddress ) {

  const { user } = useContext(UserContext);

  return (
    <Form className="contenr" onSubmit={(e) => userPutAddress(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name"  defaultValue={user.name} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control name="surname" type="text" placeholder="Surname" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="text" placeholder="Email" defaultValue={user.email}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" type="text" placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" type="number" placeholder="Phone" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" type="text" placeholder="City"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPostalCode">
          <Form.Label>Postal Code</Form.Label>
        <Form.Control name="postalcode" type="number" placeholder="Postal Code" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control name="birthday" type="date" placeholder="Birthday"/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="clear">
        Reset
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}