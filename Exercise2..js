const classList = [
    { name: "Sokha", scores: [78, 85, 92, 60, 74] },
    { name: "Dara", scores: [95, 91, 88, 93, 97] },
    { name: "Sreymom", scores: [55, 62, 48, 70, 65] },
    { name: "Bora", scores: [82, 79, 85, 88, 91] },
];

function calculateAverage(scores) {
    let total = 0;

    scores.forEach(function(score) {
        total += score;
    });

    return total / scores.length;
}

function getLetterGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else {
        return "F";
    }
}

const classAverages = classList.map(function(student) {
    return {
        name: student.name,
        average: calculateAverage(student.scores)
    };
});

const honorRoll = classAverages.filter(function(student) {
    return student.average >= 85;
});

classAverages.forEach(function(student) {
    const grade = getLetterGrade(student.average);

    console.log(
        `${student.name} — Average: ${student.average.toFixed(1)} (${grade})`
    );
});

console.log(`${honorRoll.length} students made the honor roll.`);

