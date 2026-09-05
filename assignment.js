// =============================================================================
// JavaScript Week 3 — Assignment: Student Grade Tracker
// =============================================================================

// =============================================================================
// Exercise 1 (Easy) — One Student, Basic Functions
// =============================================================================

const student = {
  name: "Sokha",
  scores: [78, 85, 92, 60, 74],
};

// Requirement 1: Write calculateAverage(scores)
// Takes an array of numbers and returns the average using a forEach loop.
function calculateAverage(scores) {
  // TODO: Create a running total variable
  // TODO: Use scores.forEach(...) to add each score to total
  // TODO: Return total divided by scores.length
}

// Requirement 2: Write getLetterGrade(average)
// Returns "A" (90+), "B" (80-89), "C" (70-79), or "F" (<70).
function getLetterGrade(average) {
  // TODO: Use if/else if/else to return the correct letter grade string
}

// Requirement 3: Calculate Sokha's average and letter grade, then log:
// "Sokha's average is 77.8 — Grade: C"
// 💡 Hint: In JS, 77.8 might print as 77.800000001.
// Use average.toFixed(1) to format a number to 1 decimal place! (e.g. (77.8001).toFixed(1) -> "77.8")
// TODO: Calculate average using calculateAverage(student.scores)
// TODO: Get letter grade using getLetterGrade(...)
// TODO: Log the formatted string using console.log()

// =============================================================================
// Exercise 2 (Medium) — A Whole Class, Array Methods
// =============================================================================

const classList = [
  { name: "Sokha", scores: [78, 85, 92, 60, 74] },
  { name: "Dara", scores: [95, 91, 88, 93, 97] },
  { name: "Sreymom", scores: [55, 62, 48, 70, 65] },
  { name: "Bora", scores: [82, 79, 85, 88, 91] },
];

// Requirement 1: Use .map() to build classAverages array
// Target shape for each item: { name: "Sokha", average: 77.8 }
let classAverages = []; // TODO: Replace [] with classList.map(...)

// Requirement 2: Use .filter() to build honorRoll array (students with average >= 85)
let honorRoll = []; // TODO: Replace [] with classAverages.filter(...)

// Requirement 3: Use .forEach() on classAverages to print a report line for each student
// Format: "Sokha — Average: 77.8 (C)"
// TODO: Write your forEach loop here

// Requirement 4: Log how many students made the honor roll
// Format: "2 students made the honor roll."
// TODO: Log using honorRoll.length

// =============================================================================
// Exercise 3 (Hard) — Callbacks + Bracket Notation
// =============================================================================

const studentSubjects = {
  name: "Chan",
  Math: 88,
  Khmer: 76,
  English: 91,
  Science: 65,
};

const subjectList = ["Math", "Khmer", "English", "Science"];

// Requirement 1: Calculate Chan's average using subjectList and bracket notation (studentSubjects[subject])
let chanAverage = 0; // TODO: Calculate total using subjectList loop and divide by subjectList.length

// Requirement 2: Write generateReport(student, average, callback)
// Note: Do NOT console.log here. Call callback(student, average)
function generateReport(student, average, callback) {
  // TODO: Invoke the callback with student and average
}

// Requirement 3: Write two callback functions
function simpleFormat(student, average) {
  // TODO: Log in format: "Chan: 80"
}

function detailedFormat(student, average) {
  // TODO: Log in format: "Report for Chan — Overall Average: 80.0"
}

// Call generateReport with each callback format
// TODO: generateReport(studentSubjects, chanAverage, simpleFormat);
// TODO: generateReport(studentSubjects, chanAverage, detailedFormat);

// =============================================================================
// Stretch Goal (Optional)
// =============================================================================
// Transform classList into subject-key objects and run generateReport with forEach!
// TODO: Your stretch goal code here

// =============================================================================
// DO NOT MODIFY BELOW THIS LINE — Used for automated tests
// =============================================================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    student,
    calculateAverage,
    getLetterGrade,
    classList,
    classAverages,
    honorRoll,
    studentSubjects,
    subjectList,
    chanAverage,
    generateReport,
    simpleFormat,
    detailedFormat,
  };
}
