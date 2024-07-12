import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";
import signinbg from "../../assets/sign-up-pic.jpg"

import { Button, Form, Image, Col, Row, Container, Alert} from "react-bootstrap";


const SignInForm = () => {
    return (
        <div className={styles.background} style={{ backgroundImage: `url(${signinbg})`}}>
          <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${styles.signincontainer} p-4 `}>
          <h1 className={styles.header}>sign in</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control className={styles.input} type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control className={styles.input} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className={btnStyles.signupbtn}>
              Sign In
            </Button>
            <Link className={styles.Link} to="/signup">
            Don't have an account yet? <span>Sign up.</span>
          </Link>
          </Form>

        </Container>
      </Col>
    </Row>
    </div>
      );
    }
    
export default SignInForm;
