import React from "react";
import courses from "../data/coursis";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Våra Kurser</h2>
      <Row>
        {courses.map((course) => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Link to={`/courses/${course.id}`}>
                 <Button
                  style={{ backgroundColor: "#6f42c1", border: "none" }}
                  
                >
                  Läs mer
                </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
