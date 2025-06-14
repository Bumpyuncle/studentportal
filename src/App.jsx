import RegisteredCourse from './pages/RegisteredCourses.jsx';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbarr.jsx';
import Home from './pages/Homee.jsx';
import Courses from './pages/Coursess.jsx';
import CourseDetail from './pages/CourseDetail';
import News from './pages/News';
import Register from './pages/Register';
import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
         <Route path="/registered" element={<RegisteredCourse />} />

        </Routes>
      </div>
    </RegistrationProvider>
  );
}

export default App;
