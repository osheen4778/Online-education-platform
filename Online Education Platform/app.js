// app.js

import Student from './student.js'; // Importing the Student class
import Instructor from './instructor.js'; // Importing the Instructor class

// Creating an instance of Student
const student1 = new Student('Alice Johnson', 'alice@example.com', 'S12345');
student1.getDetails(); // Logs: Name: Alice Johnson, Email: alice@example.com
student1.enroll(); // Logs: Student Alice Johnson has enrolled.

// Creating an instance of Instructor
const instructor1 = new Instructor('Dr. Bob Smith', 'bob@example.com', 'I67890');
instructor1.getDetails(); // Logs: Name: Dr. Bob Smith, Email: bob@example.com
instructor1.assignGrade(); // Logs: Instructor Dr. Bob Smith assigned a grade.