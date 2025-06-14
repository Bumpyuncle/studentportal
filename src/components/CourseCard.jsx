import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
<Button
  style={{ backgroundColor: "#6f42c1", borderColor: "#6f42c1" }}
  onClick={() => navigate(`/courses/${course.id}`)}
>
  Läs mer
</Button>

      </Card.Body>
    </Card>
  );
}
