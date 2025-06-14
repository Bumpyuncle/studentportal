import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="mb-4">Välkommen till StudentPortalen</h1>
      <p className="mb-4">Här kan du se kurser, läsa nyheter och registrera dig till kurser.</p>
      <div className="d-flex gap-3">
        <Button
          style={{ backgroundColor: "#6f42c1", borderColor: "#6f42c1" }}
          onClick={() => navigate("/courses")}
        >
          Gå till kurser
        </Button>

        <Link to="/news">
          <Button variant="secondary">Läs Nyheter</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
