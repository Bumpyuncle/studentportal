import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import courses from "../data/coursis";
import { useRegistration } from "../context/RegistrationContext";

const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const { registerToCourse } = useRegistration();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && selectedCourse) {
      const course = courses.find((c) => c.id === parseInt(selectedCourse));
      registerToCourse(course);
      alert("Registreringen lyckades!");
      setName("");
      setEmail("");
      setSelectedCourse("");
    } else {
      alert("Fyll i alla fält.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, margin: "auto", mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Registrera dig till en kurs
      </Typography>

      <TextField
        label="Namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="E-post"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        select
        label="Välj kurs"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        fullWidth
        margin="normal"
        required
      >
        {courses.map((course) => (
          <MenuItem key={course.id} value={course.id}>
            {course.title}
          </MenuItem>
        ))}
      </TextField>

       <Button
        type="submit"
        variant="contained"
        style={{ backgroundColor: "#6f42c1", marginTop: "1rem" }}
      >
        Registrera
      </Button>

    </Box>
  );
};

export default Register;
