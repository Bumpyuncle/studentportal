import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/coursis";
import { Button, Container, Card } from "react-bootstrap";
import { RegistrationContext } from "../context/RegistrationContext";
import { useNavigate } from "react-router-dom";


const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const { registerToCourse } = useContext(RegistrationContext);

  if (!course) {
    return <p>Kursen kunde inte hittas.</p>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text><strong>Beskrivning av kursen:</strong> {course.description}</Card.Text>
          <Card.Text><strong>Varaktighet:</strong> {course.duration}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetail;
