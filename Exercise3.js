const studentSubjects = {
    name: "Chan",
    Math: 88,
    Khmer: 76,
    English: 91,
    Science: 65,
};

const subjectList = ["Math", "Khmer", "English", "Science"];

let total = 0;

subjectList.forEach(function(subject) {
    total += studentSubjects[subject];
});

const average = total / subjectList.length;

function generateReport(student, average, callback) {
    callback(student, average);
}

function simpleFormat(student, average) {
    console.log(`${student.name}: ${Math.round(average)}`);
}

function detailedFormat(student, average) {
    console.log(
        `Report for ${student.name} — Overall Average: ${average.toFixed(1)}`
    );
}

generateReport(studentSubjects, average, simpleFormat);
generateReport(studentSubjects, average, detailedFormat);

