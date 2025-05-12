import React from 'react';
import { Nav } from 'react-bootstrap';

const SideBar = () => {
    return (
        <div className="sidebar h-100 d-flex flex-column bg-white shadow-sm">

            <Nav className="flex-column flex-grow-1">
                <Nav.Link href="#dashboard" className="ps-3 py-3 sidebar-link">Dashboard</Nav.Link>
                <Nav.Link href="#books" className="ps-3 py-3 sidebar-link">Books</Nav.Link>
                <Nav.Link href="#members" className="ps-3 py-3 sidebar-link">Members</Nav.Link>
                <Nav.Link href="#borrowings" className="ps-3 py-3 sidebar-link">Borrowings</Nav.Link>
                <Nav.Link href="#returns" className="ps-3 py-3 sidebar-link">Returns</Nav.Link>
                <Nav.Link href="#authors" className="ps-3 py-3 sidebar-link">Authors</Nav.Link>
                <Nav.Link href="#publishers" className="ps-3 py-3 sidebar-link">Publishers</Nav.Link>
                <Nav.Link href="#categories" className="ps-3 py-3 sidebar-link">Categories</Nav.Link>
                <Nav.Link href="#reports" className="ps-3 py-3 sidebar-link">Reports</Nav.Link>
            </Nav>
        </div>
    );
};

export default SideBar;
