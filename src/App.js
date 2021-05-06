import React from 'react';
import {Form,Col,Button} from "react-bootstrap";


function App() {
  return (
    <Form>
    <h1>PERSONAL INFO</h1>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="Enter First name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Enter Last name" />
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
    </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
        <option>--</option>
        <option>Tunis</option>
        <option>Sousse</option>
        <option>Nabeul</option>
    </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control />
    </Form.Group>
    </Form.Row>

    <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I agree with the terms of use" />
    </Form.Group>

    <Button variant="secondary" size="lg" block>
    Sign Up
    </Button>
</Form>
  );
}

export default App;
