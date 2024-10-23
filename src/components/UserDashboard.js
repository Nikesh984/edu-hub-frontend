import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserDashboard.css'; // Custom styles for dashboard

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data on mount (You can replace with an authenticated user API)
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/self');
        setUserData(response.data);
      } catch (error) {
        setErrorMessage('Failed to load user data.');
      }
    };

    // Fetch courses
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data.courses);
      } catch (error) {
        setErrorMessage('Failed to load courses.');
      }
    };

    fetchUserData();
    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const handleLogout = () => {
    // Handle logout (clear session, tokens, etc.)
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {userData?.name || 'User'}!</h1>
        <button onClick={handleLogout} className="btn logout-btn">Logout</button>
      </header>

      <section className="courses-section">
        <h2>Your Courses</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="courses-list">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.id)}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </section>

      <section className="chatbot-section">
        <h2>Ask a Question</h2>
        {/* You can embed your chatbot here */}
        <div className="chatbot-container">
          <p>Chatbot coming soon!</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Grid,
//   CircularProgress,
//   Alert,
//   IconButton
// } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ChatIcon from '@mui/icons-material/Chat';
// // import './UserDashboard.css'

// const UserDashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/user/self');
//         setUserData(response.data);
//       } catch (error) {
//         setErrorMessage('Failed to load user data.');
//       }
//     };

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         setCourses(response.data.courses);
//       } catch (error) {
//         setErrorMessage('Failed to load courses.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//     fetchCourses();
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/courses/${courseId}`);
//   };

//   const handleLogout = () => {
//     // Handle logout (clear session, tokens, etc.)
//     navigate('/login');
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box p={3}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//         <Typography variant="h4">
//           Welcome, {userData?.name || 'User'}!
//         </Typography>
//         <IconButton color="error" onClick={handleLogout}>
//           <LogoutIcon />
//         </IconButton>
//       </Box>

//       <Typography variant="h5" mb={2}>
//         Your Courses
//       </Typography>

//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//       <Grid container spacing={3}>
//         {courses.length > 0 ? (
//           courses.map((course) => (
//             <Grid item xs={12} sm={6} md={4} key={course.id}>
//               <Card
//                 onClick={() => handleCourseClick(course.id)}
//                 sx={{ cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {course.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {course.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Typography variant="body1">No courses available.</Typography>
//         )}
//       </Grid>

//       <Box mt={5}>
//         <Typography variant="h5" mb={2}>
//           Ask a Question
//         </Typography>
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           sx={{
//             height: '200px',
//             border: '2px dashed #ccc',
//             borderRadius: '10px',
//           }}
//         >
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<ChatIcon />}
//             onClick={() => alert('Chatbot feature coming soon!')}
//           >
//             Chat with Bot
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default UserDashboard;
