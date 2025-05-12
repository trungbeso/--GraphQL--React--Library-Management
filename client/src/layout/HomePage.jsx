import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container>
            <h2 className="mb-4">Dashboard</h2>

            {/* Stats Cards */}
            <Row className="mb-4">
                <Col md={3} className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <h1 className="display-4">1,245</h1>
                            <Card.Title>Total Books</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <h1 className="display-4">320</h1>
                            <Card.Title>Members</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <h1 className="display-4">58</h1>
                            <Card.Title>Borrowed</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                        <Card.Body>
                            <h1 className="display-4">12</h1>
                            <Card.Title>Overdue</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Recent Borrowings */}
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Recent Borrowings</h5>
                    <Button variant="outline-primary" size="sm">View All</Button>
                </Card.Header>
                <Card.Body>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Member</th>
                                <th>Borrow Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Great Gatsby</td>
                                <td>John Smith</td>
                                <td>2023-10-15</td>
                                <td>2023-10-29</td>
                                <td><span className="badge bg-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>To Kill a Mockingbird</td>
                                <td>Sarah Johnson</td>
                                <td>2023-10-12</td>
                                <td>2023-10-26</td>
                                <td><span className="badge bg-success">Active</span></td>
                            </tr>
                            <tr>
                                <td>1984</td>
                                <td>Michael Brown</td>
                                <td>2023-10-05</td>
                                <td>2023-10-19</td>
                                <td><span className="badge bg-danger">Overdue</span></td>
                            </tr>
                            <tr>
                                <td>Pride and Prejudice</td>
                                <td>Emily Davis</td>
                                <td>2023-10-10</td>
                                <td>2023-10-24</td>
                                <td><span className="badge bg-success">Active</span></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Popular Books */}
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Popular Books</h5>
                    <Button variant="outline-primary" size="sm">View All</Button>
                </Card.Header>
                <Card.Body>
                    <Row>
                        {['The Hobbit', 'Harry Potter', 'The Lord of the Rings', 'The Alchemist'].map((book, index) => (
                            <Col md={3} key={index} className="mb-3">
                                <Card>
                                    <Card.Body className="text-center">
                                        <div className="bg-light p-3 mb-3" style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className="text-muted">Book Cover</span>
                                        </div>
                                        <Card.Title className="mb-0">{book}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;
