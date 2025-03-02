// instructor.js

import User from './user.js'; // Importing the User class

// Instructor class inheriting from User
class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email); // Call the parent constructor
        this.instructorId = instructorId; // Instructor ID
    }

    // Method to assign a grade
    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

// Exporting the Instructor class
export default Instructor;