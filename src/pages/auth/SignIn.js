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
          <h1 className={styles.signinhead}>Sign In Page</h1>
        </div>
      );
    }
    
export default SignInForm;
