
// Create a map
const students = new Map();

// Add or Update Value
students.set(
    '2024-00101', // Key
    // Value
    {
        name: 'John Doe', 
        course: 'BSIT', 
        gwa: 96 
    }
);
students.set('2024-00102', { name: 'Jane Doe', course: 'BSCS', gwa: 98 });
students.set('2024-00103', { name: 'Alan Smith', course: 'BSCPE', gwa: 94 });

// Initialize with values
const students2 = new Map([
    ['2024-00101', { name: 'John Doe', course: 'BSIT', gwa: 96 }],
    ['2024-00102', { name: 'Jane Doe', course: 'BSCS', gwa: 98 }],
    ['2024-00103', { name: 'Alan Smith', course: 'BSCPE', gwa: 94 }]
]);
console.log(students2);

// Retreive a value from a map using a key
const student = students.get('2024-00102');

// Update the value of a key
students.set('2024-00102', { ...student, name: 'Jane Doe-Smith' });

// Delete a key-value pair
students.delete('2024-00103');

// Print the student object
console.log(student);

// Print individual properties of the student object
console.log(student.name);
console.log(student.course);

// Iterate (loop) through the map
students.forEach((value, key) => {
    console.log(key, value);
});

// Iterate and map as an array
const message = students.entries().map(([key, value]) => `Hi ${value.name}, your id is ${key} and course is ${value.course}`).toArray();
console.log(message);

// Check if key exists
console.log( students.has('2024-00101') );
console.log(students.has('2024-00103'));