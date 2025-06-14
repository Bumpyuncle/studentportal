import React from "react";
import { useRegistration } from "../context/RegistrationContext";
import { Card, Row, Col } from "react-bootstrap";

const RegisteredCourses = () => {
  const { registeredCourses } = useRegistration();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Registrerade Kurser</h2>
      {registeredCourses.length === 0 ? (
        <p className="text-center">Du har inte registrerat dig till några kurser än.</p>
      ) : (
        <Row>
          {registeredCourses.map((course) => (
  <Col md={4} key={course.id} className="mb-4">
    <Card>
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Card.Text><strong>Varaktighet:</strong> {course.duration}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}

        </Row>
      )}
    </div>
  );
};

export default RegisteredCourses;
