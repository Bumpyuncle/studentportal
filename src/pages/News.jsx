import React from "react";
import news from "../data/newss";
import { Card, Container, Row, Col } from "react-bootstrap";

const News = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Senaste Nyheterna</h2>
      <Row>
        {news.map((article) => (
          <Col md={6} lg={4} key={article.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
