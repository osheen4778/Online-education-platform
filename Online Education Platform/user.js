// user.js

// Base class User
class User {
    constructor(name, email) {
        this.name = name; // User's name
        this.email = email; // User's email
    }

    // Method to get user details
    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Exporting the User class
export default User;