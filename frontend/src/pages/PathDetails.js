import React from 'react';
import { useParams } from 'react-router-dom'; // Make sure this import is here

const PathDetails = () => {
  const { id } = useParams(); // This should work now
  console.log('Path ID:', id);
  
  const path = {
    title: 'Web Development Path',
    description: 'Complete guide to becoming a web developer',
    courses: [
      { id: 1, title: 'HTML & CSS Basics', duration: '2 hours', completed: true },
      { id: 2, title: 'JavaScript Fundamentals', duration: '4 hours', completed: true },
      { id: 3, title: 'React.js', duration: '6 hours', completed: false },
      { id: 4, title: 'Node.js Backend', duration: '8 hours', completed: false }
    ]
  };

  return (
    <div className="path-details">
      <h2>{path.title}</h2>
      <p>{path.description}</p>
      
      <div className="courses-list">
        <h3>Courses</h3>
        {path.courses.map(course => (
          <div key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
            <h4>{course.title}</h4>
            <span>{course.duration}</span>
            {course.completed ? (
              <span className="status completed">Completed</span>
            ) : (
              <span className="status pending">Pending</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathDetails;