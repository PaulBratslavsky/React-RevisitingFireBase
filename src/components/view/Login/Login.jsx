import React from "react";
import styles from './login.module.scss'
import { Form, Button, Col, Row } from "react-bootstrap";
import classNames from 'classnames';

export default function Login() {
  return (
    <Col className={classNames(styles.login)} md={6} >
      <Form className={styles.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="pb_btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}
