import React from "react";
import { Container } from "react-bootstrap";
import styles from "./view.module.scss";
import { Navbar } from "react-bootstrap";
export default function View({ children }) {
  return (
    <div className={styles.view}>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand href="#home">
          do
        </Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
}
