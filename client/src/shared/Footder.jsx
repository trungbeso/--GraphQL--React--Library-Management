import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footder = () => {
    return (
        <footer className="bg-light py-3 mt-auto border-top">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Fluent Platform. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p className="mb-0">Library Management System</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footder;
