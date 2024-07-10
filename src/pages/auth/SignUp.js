import React from "react";
import { Link } from "react-router-dom";
import signuppic from "../../assets/sign-up-pic.jpg"
import appStyles from "../../App.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Button, Form, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className= "p-4">
          <h1 className={styles.header}>Sign Up</h1>

          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control className={styles.input} type="text" placeholder="Enter Username" name="username" />
            </Form.Group>

            <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control className={styles.input} type="password" placeholder="Password" name="password1" />
            </Form.Group>
            <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control className={styles.input} type="password" placeholder="Confirm Password" name="password2" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check className={styles.input} type="checkbox" label="Create an account for a business" />
            </Form.Group>
            <Button type="submit" className={btnStyles.signupbtn}>
            Sign Up
            </Button>
          </Form>

        </Container>
        <Container>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign In</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className="my-auto d-none d-md-block p-2"
      >
        <Image className={`${appStyles.FillerImage}`}
          src={signuppic} alt="two gold wedding rings"
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;