// student.js

import User from './user.js'; // Importing the User class

// Student class inheriting from User
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email); // Call the parent constructor
        this.studentId = studentId; // Student ID
    }

    // Method to enroll the student
    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

// Exporting the Student class
export default Student;