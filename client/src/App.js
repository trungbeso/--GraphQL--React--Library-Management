import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import Navbar from './shared/Navbar';
import SideBar from './shared/SideBar';
import Footder from './shared/Footder';
import HomePage from './layout/HomePage';

function App() {
  return (
    <div className="bg-light-subtle min-vh-100 d-flex flex-column">
      <Navbar />
      <Container fluid className="flex-grow-1 px-0">
        <Row className="h-100 g-0">
          <Col md={3} lg={2} className="d-none d-md-block p-0">
            <SideBar />
          </Col>
          <Col md={9} lg={10} className="py-3 px-4">
            <HomePage />
          </Col>
        </Row>
      </Container>
      <Footder />
    </div>
  );
}

export default App;
